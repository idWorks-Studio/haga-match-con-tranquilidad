import React from 'react';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Módulo 1', href: '#module1' },
    { label: 'Módulo 2', href: '#module2' },
    { label: 'Módulo 3', href: '#module3' },
    { label: 'Módulo 4', href: '#module4' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-sm ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#038450]">
            Seguros Bolívar
          </div>
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#038450] hover:text-[#ffe16f] transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

