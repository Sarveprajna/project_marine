import React from 'react';
import { LineChart, AlertTriangle } from 'lucide-react';

export function InsightsDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Health Insights</h2>
        <LineChart className="h-6 w-6 text-blue-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-800">Rising Temperature Alert</h3>
            <p className="text-sm text-gray-600">Water temperature has increased by 1.2°C in the past week</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">Overall Health Score</h3>
            <p className="text-2xl font-bold text-blue-600">87/100</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">Recommended Actions</h3>
            <p className="text-2xl font-bold text-blue-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}