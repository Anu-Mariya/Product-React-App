import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddProduct from './components/AddProduct'
import SearchProduct from './components/SearchProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddProduct />
    <SearchProduct />  

    </>
  )
}

export default App
