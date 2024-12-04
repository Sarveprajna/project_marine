import React from 'react';
import { Droplet } from 'lucide-react';

export function CoralHealth() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Coral Health Analysis</h2>
        <Droplet className="h-6 w-6 text-blue-500" />
      </div>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="file"
            className="hidden"
            id="coral-upload"
            accept="image/*"
          />
          <label
            htmlFor="coral-upload"
            className="block w-full p-4 border-2 border-dashed border-blue-300 rounded-lg text-center cursor-pointer hover:border-blue-500 transition-colors"
          >
            <span className="text-gray-600">Drop reef images or click to upload</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">Bleaching Risk</h3>
            <p className="text-2xl font-bold text-blue-600">Low</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">Health Score</h3>
            <p className="text-2xl font-bold text-green-600">92%</p>
          </div>
        </div>
      </div>
    </div>
  );
}