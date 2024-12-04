import React from 'react';
import { Trash2 } from 'lucide-react';

export function DebrisDetection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Marine Debris Detection</h2>
        <Trash2 className="h-6 w-6 text-blue-500" />
      </div>
      <div className="relative h-64 mb-4 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621451537084-482c73073a0f"
          alt="Satellite view of ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <p className="text-white">Latest Satellite Analysis</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Debris Detected</h3>
          <p className="text-2xl font-bold text-red-600">12 areas</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Clean Areas</h3>
          <p className="text-2xl font-bold text-green-600">85%</p>
        </div>
      </div>
    </div>
  );
}