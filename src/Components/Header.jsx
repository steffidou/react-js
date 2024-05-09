import React from 'react'

export default function Header() {
    return (
        <header className="bg-black-500 text-white py-4">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    )
}
