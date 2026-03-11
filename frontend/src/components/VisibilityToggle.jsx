import { useState } from 'react';

function VisibilityToggle() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="card small-card">
      <h3>Mostrar / ocultar elemento</h3>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar mensaje' : 'Mostrar mensaje'}
      </button>
      {visible && (
        <p className="toggle-message">
          Este elemento cambia su visibilidad usando state en React.
        </p>
      )}
    </div>
  );
}

export default VisibilityToggle;
