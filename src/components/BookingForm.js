import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    customer_name: "",
    appointment_date: "",
    appointment_time: "",
    checklist: [],
  });

  const [services, setServices] = useState([]);
  const [loading,setLoading] = useState(true); 

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/services/');
                setServices(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);




  const [error, setError] = useState("");

  const predefinedServices = ["Haircut", "Shave", "Facial", "Manicure", "Pedicure"];

  const generateTimeSlots = () => {
    const times = [];
    const startHour = 9; // Barber shop start time (9 AM)
    const endHour = 18; // Barber shop end time (6 PM)

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute of [0, 30]) {
        const time = new Date(0, 0, 0, hour, minute, 0);
        const formattedTime = time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  const handleChecklistChange = (service) => {
    setAppointmentData((prevData) => {
      const checklist = prevData.checklist.some((item) => item.text === service)
        ? prevData.checklist.filter((item) => item.text !== service)
        : [...prevData.checklist, { text: service, done: false }];
      return { ...prevData, checklist };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!appointmentData.customer_name) {
      setError("Customer name is required.");
      return;
    }

    if (!appointmentData.appointment_date) {
      setError("Appointment date is required.");
      return;
    }

    if (!appointmentData.appointment_time) {
      setError("Appointment time is required.");
      return;
    }

    if (appointmentData.checklist.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    axios
      .post("http://localhost:8000/api/appointments/", appointmentData)
      .then((response) => {
        console.log("Appointment booked successfully:", response.data);
        setAppointmentData({
          customer_name: "",
          appointment_date: "",
          appointment_time: "",
          checklist: [],
        });
        setError("");
        navigate("/success-page"); // Replace with your success page path
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
      });
  };

  return (
    <div>
      <ul className="flex items-center justify-between bg-gray-800 p-4">
        <li>
          <button
            className="text-white flex items-center"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M14.41 7.41L13 6l-6 6 6 6 1.41-1.41L9.83 12z" />
            </svg>{" "}
            Back
          </button>
        </li>
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
      </ul>

      <div className="bg-gray-200 p-4">
        <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
          <h2 className="text-4xl font-bold text-gray-600 mb-6">Book Appointment</h2>
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-gray-700 font-medium">
              Customer Name:
              <input
                type="text"
                className="form-input mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 px-3"
                id="customerName"
                placeholder="Enter your name"
                value={appointmentData.customer_name}
                onChange={(e) =>
                  setAppointmentData({
                    ...appointmentData,
                    customer_name: e.target.value,
                  })
                }
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentDate" className="block text-gray-700 font-medium">
              Date:
              <input
                type="date"
                className="form-input mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 px-3"
                id="appointmentDate"
                value={appointmentData.appointment_date}
                onChange={(e) =>
                  setAppointmentData({
                    ...appointmentData,
                    appointment_date: e.target.value,
                  })
                }
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentTime" className="block text-gray-700 font-medium">
              Time:
              <select
                className="form-select mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 px-3"
                id="appointmentTime"
                value={appointmentData.appointment_time}
                onChange={(e) =>
                  setAppointmentData({
                    ...appointmentData,
                    appointment_time: e.target.value,
                  })
                }
              >
                <option value="" disabled>Select Time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mb-4">
            <fieldset className="block">
              <legend className="block text-gray-700 font-medium">Select Services:</legend>
              <div className="mt-2 space-y-2">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service.id}
                      checked={appointmentData.checklist.some((item) => item.text === service)}
                      onChange={() => handleChecklistChange(service)}
                      className="form-checkbox text-purple-600 h-5 w-5 rounded"
                    />
                    <label htmlFor={service} className="ml-2 text-gray-700">
                      {service.name}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
