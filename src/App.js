import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './styles.css';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f0] to-[#e8d4ba] text-gray-900 font-serif">
      <header className="p-6 shadow-md bg-[#f3e1c0] border-b-4 border-yellow-800 flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-wide text-yellow-900">Aventura Lumina</h1>
        <nav className="space-x-4 text-yellow-900 font-medium">
          <Link to="/login" className="hover:underline">Iniciar sesión</Link>
          <Link to="/tienda" className="hover:underline">Tienda</Link>
          <Link to="/grupo" className="hover:underline">Zona de grupo</Link>
          <Link to="/familias" className="hover:underline">Zona para familias</Link>
        </nav>
      </header>

      <main className="p-10 max-w-7xl mx-auto">
        <section className="bg-[#fffdf7] p-10 rounded-3xl shadow-2xl border border-yellow-300">
          <h2 className="text-3xl font-extrabold mb-6 text-yellow-900">Bienvenido a la Aldea Lumina</h2>
          <p className="text-lg leading-relaxed">
            Acompaña a <strong>Lía</strong>, <strong>Niko</strong> y el sabio <strong>Arwen</strong> en una aventura por recuperar el saber
            perdido. Enfréntate a retos, gana <span className="text-yellow-700 font-semibold">Lumis</span> y derrota al temido fénix <strong>Ignash</strong>.
          </p>
          <p className="mt-4 italic text-sm text-yellow-800">Inspirado en el universo de Demon Slayer con decoraciones steampunk.</p>
        </section>

        <section className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-yellow-100 border-2 border-yellow-300 p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-800">🌟 Gana Lumis</h3>
            <p>Completa misiones y actividades para conseguir Lumis que podrás canjear por beneficios útiles.</p>
          </div>
          <div className="bg-yellow-100 border-2 border-yellow-300 p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-800">🧠 Mejora tu nivel</h3>
            <p>Supera retos en cada UDI y sube de nivel hasta convertirte en Guardián del Saber.</p>
          </div>
          <div className="bg-yellow-100 border-2 border-yellow-300 p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-800">🃏 Colecciona cartas</h3>
            <p>Obtén cartas mágicas como recompensas y descubre sus habilidades especiales.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff9e6] to-[#e4cfa4]">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-yellow-300">
        <h2 className="text-2xl font-bold mb-6 text-yellow-900">Iniciar sesión</h2>
        <form>
          <label className="block mb-2 text-yellow-900">Usuario</label>
          <input className="w-full p-3 mb-4 border rounded-xl" type="text" />
          <label className="block mb-2 text-yellow-900">Contraseña</label>
          <input className="w-full p-3 mb-4 border rounded-xl" type="password" />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold p-3 rounded-xl w-full">
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
      <h2 className="text-3xl font-bold text-yellow-900">Tienda de recompensas</h2>
      <p className="mt-4">Próximamente podrás canjear tus <span className="font-semibold">Lumis</span> por beneficios mágicos que te ayudarán en el día a día.</p>
    </div>
  );
}

function Grupo() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-yellow-900">Zona de grupo</h2>
      <p className="mt-4">Aquí podréis subir vuestros trabajos en equipo y consultar el portfolio del grupo de aventureros.</p>
    </div>
  );
}

function Familias() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-yellow-900">Zona para familias</h2>
      <p className="mt-4">Información para las familias sobre el avance, las misiones y los aprendizajes del alumnado.</p>
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
