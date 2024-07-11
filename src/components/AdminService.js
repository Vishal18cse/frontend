import React, { useEffect, useState } from 'react';
import { getServices, createService, updateService, deleteService } from '../services/apiService';

const AdminService = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', price: '' });
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    getServices()
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  };

  const handleCreateService = () => {
    createService(newService)
      .then(response => {
        setServices([...services, response.data]);
        setNewService({ name: '', price: '' });
      })
      .catch(error => {
        console.error('There was an error creating the service!', error);
      });
  };

  const handleUpdateService = () => {
    updateService(editingService.id, editingService)
      .then(response => {
        const updatedServices = services.map(service =>
          service.id === editingService.id ? response.data : service
        );
        setServices(updatedServices);
        setEditingService(null);
      })
      .catch(error => {
        console.error('There was an error updating the service!', error);
      });
  };

  const handleDeleteService = (id) => {
    deleteService(id)
      .then(() => {
        setServices(services.filter(service => service.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the service!', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditingService({ ...editingService, [name]: value });
  };

  return (
    <div className="container mx-auto mt-5 px-4">
      <h1 className="text-center text-violet-400 mb-5 text-3xl font-bold">Services</h1>

      {/* Add New Service */}
      <div className="mb-5">
        <h2 className="text-purple-500 text-2xl font-semibold mb-3">Add New Service</h2>
        <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input mt-1 block w-full sm:w-auto h-10 flex-grow rounded-md border-gray-300 shadow-sm"
            value={newService.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="form-input mt-1 block w-full sm:w-auto h-10 flex-grow rounded-md border-gray-300 shadow-sm"
            value={newService.price}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0"
            onClick={handleCreateService}
          >
            Add Service
          </button>
        </div>
      </div>

      {/* Edit Service */}
      {editingService && (
        <div className="mb-5">
          <h2 className="text-purple-500 text-2xl font-semibold mb-3">Edit Service</h2>
          <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input mt-1 block w-full sm:w-auto flex-grow rounded-md border-gray-300 shadow-sm"
              value={editingService.name}
              onChange={handleEditInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-input mt-1 block w-full sm:w-auto flex-grow rounded-md border-gray-300 shadow-sm"
              value={editingService.price}
              onChange={handleEditInputChange}
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0"
              onClick={handleUpdateService}
            >
              Update Service
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0"
              onClick={() => setEditingService(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Service List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-purple-100 text-violet-400">
            <tr>
              {/* <th className="py-2 px-4 border-b">ID</th> */}
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                {/* <td className="py-2 px-4 border-b">{service.id}</td> */}
                <td className="py-2 px-4 border-b">{service.name}</td>
                <td className="py-2 px-4 border-b">{service.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => setEditingService(service)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminService;
