import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link href="/" className="flex items-center">
  <Image
    src="/duck.png" // Zakładam, że obrazek nazywa się duck.png i znajduje się w folderze public
    alt="Duck"
    width="40" // Ustaw szerokość obrazka według potrzeb
    height="40" // Ustaw wysokość obrazka według potrzeb
    className="mr-2" // Daje margines po prawej stronie, aby tekst nie przylegał bezpośrednio do obrazka
  />
  <span className="text-lg font-bold">Domestico.pl</span>
</Link>

          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  )
}

export default Header
