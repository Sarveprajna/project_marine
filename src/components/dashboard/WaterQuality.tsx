import React from 'react';
import { Thermometer, Droplet, Activity } from 'lucide-react';

export function WaterQuality() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Water Quality Metrics</h2>
        <Activity className="h-6 w-6 text-blue-500" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Temperature</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-2">24.5°C</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Droplet className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Salinity</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-2">35 PSU</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">pH Level</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-2">8.2</p>
        </div>
      </div>
    </div>
  );
}