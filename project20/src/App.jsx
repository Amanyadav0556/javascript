import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import './styles/App.css'

const productSeed = [
  { id: 1, name: 'Classic Tee', description: 'Soft cotton daily wear.', price: 25 },
  { id: 2, name: 'Runner Shoes', description: 'Lightweight and durable pair.', price: 79 },
  { id: 3, name: 'Travel Bag', description: 'Compact backpack with laptop sleeve.', price: 54 },
]

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const [cartItems, setCartItems] = useState([])

  const pageContent = useMemo(() => {
    if (currentPage === 'Products') {
      return <Products products={productSeed} onAddToCart={(item) => setCartItems((prev) => [...prev, item])} />
    }

    if (currentPage === 'Cart') {
      return <Cart cartItems={cartItems} />
    }

    if (currentPage === 'Login') {
      return <Login />
    }

    if (currentPage === 'Checkout') {
      return <Checkout cartItems={cartItems} />
    }

    return <Home />
  }, [cartItems, currentPage])

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} cartCount={cartItems.length} />
      <main className="main">{pageContent}</main>
      <Footer />
    </div>
  )
}

export default App
