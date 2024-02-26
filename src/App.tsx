
import { useState,ChangeEvent,FormEvent } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { DataListes,formInputsList } from './components/data/Data'
import ModalD from './components/ui/ModalD'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import {IProductLists} from './components/Interface'
import { productValidation } from './validation/Validation'
import ErrorMessage from './components/ErrorMessage'

function App() {

  const [errors, setErrors] = 
  useState({ title: "", descreption: "", imageURL: "", price: "" });
  
  const deftProductObj: IProductLists = {
    title: "",
    descreption: "",
    imageURL: "",
    price: "",
    colors: [],
    categorys: {
      name: "",
      imageURL: "",
    },
  };
  const[product,setProduct] = 
  useState<IProductLists>(deftProductObj)
   const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onCancel = () => {
    closeModal()
    // setIsOpen(false)
    setProduct(deftProductObj)
  };

  const onChangeHandler = 
  (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (e: 
    FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, descreption,
       price, imageURL } = product;

    const errors = productValidation({
      title, descreption,
      price, imageURL,
    });
    console.log(product)

    const hasErrorMsg =
    Object.values(errors).some(value => value === "") && 
    Object.values(errors).every(value => value === "");
    

  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }

  }

 //Renders
 const RenderProductList = DataListes
 .map((product) =><ProductCard key={product.id} 
 product={product} /> );

// inputs 
 const renderFormInputList = 
 formInputsList.map((input) => (
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} 
    className="mb-[2px] text-sm font-medium
     text-gray-700">
      {input.label}
    </label>
    <Input type="text" id={input.id} 
    name={input.name}   
    className='border-2 border-gray-350'
     value={product[input.name]} 
    onChange={onChangeHandler} 
    />
     <ErrorMessage msg={errors[input.name]} /> 
  </div>
    ));


  return (
    <main className='container mx-auto'>

      <Button onClick={openModal} 
      className="bg-indigo-950 hover:bg-indigo-800 mt-5">
            Add + </Button> 

       <div className='fles justify-between items-center gap-4 p-8 '>
        
        <ModalD isOpen={isOpen} closeModal={closeModal} 
        title='add new product'>
          <form onSubmit={submitHandler}>
            <div className='m-5 flex flex-col space-y-4'>
              {renderFormInputList}
              </div>
          <div className='flex items-center justify-center space-x-5'>
            
          <Button onClick={onCancel}
          className="bg-rose-900 hover:bg-rose-800">
            Cancel</Button>
          <Button 
          className="bg-indigo-950 hover:bg-indigo-800">
            Submit</Button> 
            </div>
          </form>
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
