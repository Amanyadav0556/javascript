function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <section>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p className="total">Total: ${total}</p>
        </>
      )}
    </section>
  )
}

export default Cart
