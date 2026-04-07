function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-meta">
        <span>${product.price}</span>
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
