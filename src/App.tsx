import React from 'react';
import { Header } from './components/layout/Header';
import { CoralHealth } from './components/dashboard/CoralHealth';
import { WaterQuality } from './components/dashboard/WaterQuality';
import { DebrisDetection } from './components/dashboard/DebrisDetection';
import { InsightsDashboard } from './components/dashboard/InsightsDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoralHealth />
          <WaterQuality />
          <DebrisDetection />
          <InsightsDashboard />
        </div>
      </main>
    </div>
  );
}

export default App;