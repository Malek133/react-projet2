
import './App.css'
import ProductCard from './components/ProductCard'
import { DataListes } from './components/data/Data'


function App() {
 //Renders
 const RenderProductList = DataListes
 .map((product) =><ProductCard key={product.id} product={product} /> )
  return (
    <main className='container mx-auto'>
    <div className='p-4 m-5 rounded-2xl
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6'>
      
    {RenderProductList}
    </div>
    
    </main>
  )
}

export default App
