// app/components/Navbar.tsx
import LinkComponent from './LinkComponent';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md" style={{ position: 'fixed', width: '100%', zIndex: 4 }}>
      <nav className="px-6 py-4">
        <ul className="flex space-x-8">
          <li>
            <LinkComponent title="Inicio" href="/" />
          </li>
          <li>
            <LinkComponent title="Sneakers" href="/sneaker" />
          </li>
          <li>
            <LinkComponent title="Tiendas" href="/tiendas" />
          </li>
          <li>
            <LinkComponent title="Vault" href="/vault" />
          </li>
          <li>
            <LinkComponent title="Contenido" href="/contenido" />
          </li>
          <li>
            <LinkComponent title="Medios" href="/contenido" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
