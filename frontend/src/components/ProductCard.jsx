function ProductCard({ product }) {
  return (
    <article className="card product-card">
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-meta">
        <span className="price">RD$ {product.price.toFixed(2)}</span>
        <span className={`status ${product.available ? 'available' : 'unavailable'}`}>
          {product.available ? 'Disponible' : 'No disponible'}
        </span>
      </div>
    </article>
  );
}

export default ProductCard;
