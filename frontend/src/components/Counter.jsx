import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card small-card">
      <h3>Componente contador</h3>
      <p>Valor actual: <strong>{count}</strong></p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Disminuir</button>
        <button onClick={() => setCount(0)}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Counter;
