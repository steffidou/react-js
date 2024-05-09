import React from 'react';

export default function Header() {
  return (
    <header className="bg-violet-400 text-white py-4">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex justify-center">
            <li className="mr-60"><a href="/" className="text-white">Home</a></li>
            <li className="mr-60"><a href="/about" className="text-white">About</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
