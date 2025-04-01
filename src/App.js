import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 text-gray-800">
      <header className="p-6 shadow-md bg-white flex justify-between items-center">
        <h1 className="text-3xl font-bold">Aventura Lumina</h1>
        <nav className="space-x-4">
          <Link to="/login" className="hover:underline">Iniciar sesión</Link>
          <Link to="/tienda" className="hover:underline">Tienda</Link>
          <Link to="/grupo" className="hover:underline">Zona de grupo</Link>
          <Link to="/familias" className="hover:underline">Zona para familias</Link>
        </nav>
      </header>

      <main className="p-10">
        <section className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Bienvenido a la Aldea Lumina</h2>
          <p>
            Acompaña a <strong>Lía</strong>, <strong>Niko</strong> y el sabio <strong>Arwen</strong> en una aventura por recuperar el saber
            perdido. Enfréntate a retos, gana <em>Lumis</em> y derrota al temido fénix <strong>Ignash</strong>.
          </p>
          <p className="mt-4 italic text-sm">Estilo steampunk inspirado en Demon Slayer.</p>
        </section>
        <section className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">🌟 Gana Lumis</h3>
            <p>Completa misiones y actividades para conseguir Lumis que podrás canjear por beneficios.</p>
          </div>
          <div className="bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">🧠 Mejora tu nivel</h3>
            <p>Supera retos en cada UDI y sube de nivel para convertirte en Guardián del Saber.</p>
          </div>
          <div className="bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">🃏 Colecciona cartas</h3>
            <p>Obtén cartas mágicas como recompensas especiales y descubre sus poderes ocultos.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <form>
          <label className="block mb-2">Usuario</label>
          <input className="w-full p-2 mb-4 border rounded" type="text" />
          <label className="block mb-2">Contraseña</label>
          <input className="w-full p-2 mb-4 border rounded" type="password" />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded w-full">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

function Tienda() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Tienda de recompensas</h2>
      <p className="mt-2">Próximamente podrás canjear tus Lumis por beneficios mágicos.</p>
    </div>
  );
}

function Grupo() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Zona de grupo</h2>
      <p className="mt-2">Sube aquí los trabajos en equipo y consulta el portfolio del grupo.</p>
    </div>
  );
}

function Familias() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Zona para familias</h2>
      <p className="mt-2">Información útil para las familias sobre el avance y los proyectos.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/grupo" element={<Grupo />} />
        <Route path="/familias" element={<Familias />} />
      </Routes>
    </Router>
  );
}
