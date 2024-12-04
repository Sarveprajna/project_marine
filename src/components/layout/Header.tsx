import React from 'react';
import { Waves, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Waves className="h-8 w-8" />
          <h1 className="text-2xl font-bold">MarineWatch AI</h1>
        </div>
        <button className="p-2 hover:bg-blue-700 rounded-full">
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}