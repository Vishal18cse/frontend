import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                if (user) {
                    const response = await axios.get('http://localhost:8000/api/appointments/');
                    setAppointments(response.data);
                }
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [user]);

    const toggleChecklistItemStatus = async (appointmentId, itemIndex) => {
        try {
            const appointment = appointments.find(app => app.id === appointmentId);
            if (appointment) {
                const updatedChecklist = appointment.checklist.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, done: !item.done };
                    }
                    return item;
                });

                const convertTo12HourFormat = (timeString) => {
                    const time = new Date(`1970-01-01T${timeString}`);
                    const hours = time.getHours();
                    const minutes = time.getMinutes();
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12 AM
                    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
                    return `${hours12}:${minutesStr} ${ampm}`;
                };

                const formattedAppointmentTime = convertTo12HourFormat(appointment.appointment_time);

                const payload = {
                    ...appointment,
                    appointment_time: formattedAppointmentTime,
                    checklist: updatedChecklist,
                };

                const response = await axios.put(`http://localhost:8000/api/appointments/${appointmentId}/`, payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                setAppointments(prevAppointments => prevAppointments.map(app => {
                    if (app.id === appointmentId) {
                        return response.data; // Update the state with the updated appointment data
                    }
                    return app;
                }));
            }
        } catch (error) {
            console.error('Error updating checklist item status:', error);
            if (error.response) {
                console.log('Error response:', error.response.data);
            }
        }
    };

    if (!user) {
        return <p className="text-center mt-4">Please log in to view appointments.</p>;
    }

    const formatTime = (timeString) => {
        const time = new Date(`1970-01-01T${timeString}`);
        return time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <h2 className="text-2xl font-bold text-center mb-4">Appointments</h2>
            <ul className="list-none">
                {appointments.map(appointment => (
                    <li key={appointment.id} className="bg-gray-100 border border-gray-300 mb-4 p-4 rounded-lg shadow-md">
                        <p className="font-semibold">Customer: <span className="text-gray-700">{appointment.customer_name}</span></p>
                        <p className="font-semibold">Date: <span className="text-gray-700">{appointment.appointment_date}</span></p>
                        <p className="font-semibold">Time: <span className="text-gray-700">{formatTime(appointment.appointment_time)}</span></p>
                        {renderChecklist(appointment, toggleChecklistItemStatus)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const renderChecklist = (appointment, toggleChecklistItemStatus) => {
    if (!appointment.checklist || !Array.isArray(appointment.checklist)) {
        return <p className="text-gray-700 mt-2">No checklist items</p>;
    }

    return (
        <div className="mt-2">
            <p className="font-semibold">Checklist:</p>
            <ul className="list-none">
                {appointment.checklist.map((item, index) => (
                    <li key={index} className="flex items-center py-2">
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => toggleChecklistItemStatus(appointment.id, index)}
                            className="mr-2"
                        />
                        <span className={item.done ? "line-through text-gray-500" : "text-gray-700"}>
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
