function Navbar({ currentPage, onNavigate, cartCount }) {
  const links = ['Home', 'Products', 'Cart', 'Login', 'Checkout']

  return (
    <header className="navbar">
      <h1 className="brand">ShopWave</h1>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <button
            key={link}
            type="button"
            className={currentPage === link ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onNavigate(link)}
          >
            {link}
          </button>
        ))}
      </nav>
      <div className="cart-pill">Cart: {cartCount}</div>
    </header>
  )
}

export default Navbar
