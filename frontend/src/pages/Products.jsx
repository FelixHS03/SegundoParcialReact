import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { getProducts } from '../services/api.js';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('No fue posible cargar los productos desde la API.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section>
      <div className="page-header">
        <h2>Productos desde API ASP.NET Core</h2>
        <p>Esta página consume información desde un Web API desarrollado en .NET Core.</p>
      </div>

      {loading && <p className="info-text">Cargando productos...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
