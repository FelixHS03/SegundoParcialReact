function Header() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div>
          <p className="badge">Segunda Evaluación Parcial - React</p>
          <h1>TechWave Solutions</h1>
          <p className="hero-text">
            Proyecto realizado en React con JSX, componentes reutilizables, props,
            children, manejo de estado, visibilidad de elementos y consumo de una Web API en ASP.NET Core.
          </p>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
          alt="Equipo de desarrollo web"
        />
      </div>
    </header>
  );
}

export default Header;
