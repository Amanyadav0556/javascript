import ProductCard from '../components/ProductCard'

function Products({ products, onAddToCart }) {
  return (
    <section>
      <h2>Products</h2>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default Products
