import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const SessionCard = ({ title, day, time }) => (
  <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow">
    {/* Header */}
    <div className="flex items-start justify-start">
      <h4 className="text-base font-semibold text-gray-900 text-left">
        {title}
      </h4>
    </div>
    {/* Footer */}
    <div className="mt-4 border-t border-gray-200 pt-3 flex items-center gap-6 text-gray-600">
      <div className="flex items-center gap-2">
        <FaCalendarAlt className="text-lg text-primary" />
        <span className="font-medium">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-lg text-primary" />
        <span className="font-medium">{time}</span>
      </div>
    </div>
  </div>
);

export default SessionCard;