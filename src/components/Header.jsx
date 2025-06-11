import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 fixed w-full z-20">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">WDSPERU</h1>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">

          {["inicio", "servicios", "portafolio", "nosotros", "contacto"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-blue-600 capitalize">{item}</a>
          ))}
          
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-blue-700">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 text-center shadow">
          {["inicio", "servicios", "portafolio", "nosotros", "contacto"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block text-blue-600 capitalize">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
