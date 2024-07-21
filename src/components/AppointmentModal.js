import React from 'react';
import PropTypes from 'prop-types';

const AppointmentModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-sm w-full mx-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment Status</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default AppointmentModal;
