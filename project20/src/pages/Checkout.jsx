function Checkout({ cartItems }) {
  return (
    <section>
      <h2>Checkout</h2>
      <p>Items ready for checkout: {cartItems.length}</p>
      <button type="button" disabled={cartItems.length === 0}>
        Place Order
      </button>
    </section>
  )
}

export default Checkout
