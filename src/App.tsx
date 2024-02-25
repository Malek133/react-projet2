
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { DataListes } from './components/data/Data'
import ModalD from './components/ui/ModalD'
import Button from './components/ui/Button'


function App() {
   const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
 //Renders
 const RenderProductList = DataListes
 .map((product) =><ProductCard key={product.id} product={product} /> )
  return (
    <main className='container mx-auto'>

      <Button onClick={openModal} 
      className="bg-indigo-950 hover:bg-indigo-800 mt-5">
            Add + </Button> 

       <div className='fles justify-between items-center gap-4 p-8 '>
        
        <ModalD isOpen={isOpen} closeModal={closeModal} 
        title='add new product'>

          <div className='flex items-center justify-center space-x-5'>
          <Button className="bg-green-700 hover:bg-green-500">
            Cancel</Button>
          <Button className="bg-pink-900 hover:bg-pink-500">
            Submit</Button> 
            </div>

        </ModalD>
        </div> 
    <div className='p-4 m-5 rounded-2xl
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6'>
      
    {RenderProductList}
    </div>
   

    </main>
  )
}

export default App
