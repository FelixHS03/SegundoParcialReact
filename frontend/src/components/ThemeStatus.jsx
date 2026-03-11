function ThemeStatus({ isDark, toggleTheme }) {
    return (
        <div className="card small-card">
            <h3>Cambio de estado</h3>
            <p>
                Estado actual:{' '}
                <strong>{isDark ? 'Modo oscuro activado' : 'Modo claro activado'}</strong>
            </p>
            <button onClick={toggleTheme}>
                Cambiar estado
            </button>
        </div>
    );
}

export default ThemeStatus;