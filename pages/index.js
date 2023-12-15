import Link from 'next/link'

import Melhores from "./melhores"

export default function Index() {
    return (
      <html lang="en">
        <head>

        </head>
        <body>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/perfil">Perfil</Link>
            </li>
            <li>
              <Link href="/melhores">Melhores</Link>
            </li>
            <li>
              <Link href="/graficos">Graficos</Link>
            </li>
          </ul>
        </body>
      </html>
    )
}