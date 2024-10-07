import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import NewsBoard from '../components/newsboard/NewsBoard'
import Footer from '../components/footer/Footer'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    <Footer/>
    </>
   )
}

export default App
