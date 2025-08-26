import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Content from '../components/layout/Content';

export default function Dashboard() {
  //const [activeSection, setActiveSection] = useState('Productos');
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onSelect={setActiveSection} active={activeSection} />
        <Content section={activeSection} />
      </div>
    </div>
  );
}