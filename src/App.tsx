
import { useState,ChangeEvent,FormEvent } from 'react'
import './App.css'
import { v4 as uuid } from "uuid";
import ProductCard from './components/ProductCard'
import { DataListes,formInputsList, colors, categories } from './components/data/Data'
import ModalD from './components/ui/ModalD'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import {IProductLists} from './components/Interface'
import { productValidation } from './validation/Validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColors from './components/CircelColors'
  import Select from './components/ui/Select';
  import {ProductNameTypes} from './components/types'
  import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [errors, setErrors] = useState({ 
    title: "", descreption: "", imageURL: "", price: "" });
  
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
  const [products, setProducts] = useState<IProductLists[]>(DataListes);
  const[product,setProduct] = useState<IProductLists>(deftProductObj);
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [productToEdit, setProductToEdit] = useState<IProductLists>(deftProductObj);
   const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
   const [tempColors, setTempColor] = useState<string[]>([]);
   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
   const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  

  function closeModal() {setIsOpen(false)}
  function openModal() { setIsOpen(true)}

  function closeEditModal() {setIsOpenEditModal(false)}
  function openEditModal() { setIsOpenEditModal(true)}

  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);

  const onCancel = () => {
    closeModal()
    setProduct(deftProductObj)
  };

  const removeProductHandler = ()=>{
    const filtered = products.filter(product => product.id !== productToEdit.id);
     setProducts(filtered)
    // setProductToEdit(product)
    closeConfirmModal();
    toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#dc7d7d",
        color: "white",
      },
    });
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  // ADD NEW  PRODUCT HANDLER
  const submitHandler = (e: 
    FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, descreption,
       price, imageURL } = product;

    const errors = productValidation({
      title, descreption,
      price, imageURL,
    });
    // console.log(product)

    const hasErrorMsg =
    Object.values(errors).some(value => value === "") && 
    Object.values(errors).every(value => value === "");
    

  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }
  setProducts(prev => [{ ...product, id: uuid(), 
    colors: tempColors,categorys:selectedCategory}, ...prev]);
    setProduct(deftProductObj)
    setTempColor([])
    closeModal()
  // setProducts(prev =>[...prev,{...product,id:uuid(),colors:setTempColor}])
  }
  // ADD NEW PRODUCT HANDLER

  // EDIT PRODUCT 
  const submitEditHandler = (e: 
    FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, descreption,
       price, imageURL } = productToEdit;

    const errors = productValidation({
      title, descreption,price, imageURL,});
   
    const hasErrorMsg =Object.values(errors).some(value => value === "") && 
    Object.values(errors).every(value => value === "");
    

  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }
  
  const updateProducts=[...products,];
  updateProducts[productToEditIdx]= {...productToEdit,
    colors: tempColors.concat(productToEdit.colors)};
  setProducts(updateProducts)
    setProductToEdit(deftProductObj)
    setTempColor([])
    closeEditModal();
  }
  // EDIT PRODUCT

 //Renders
 const RenderProductList = products.map((product,idx) =>(
 
 <ProductCard key={product.id} product={product}
 openEditModal={openEditModal}  idx={idx}
 setProductToEdit={setProductToEdit} 
 setProductToEditIdx={setProductToEditIdx}
 openConfirmModal={openConfirmModal}  />
  ));

// inputs 
 const renderFormInputList = formInputsList.map((input) => (
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

    const RenderProductColor= colors.map(color => 
    <CircleColors key={color} color={color} 
    onClick={() => {
        if(tempColors.includes(color)){
          setTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        setTempColor((prev)=> [...prev,color] )}} 
        />)

        const renderProductEditWithErrorMsg = 
        (id: string, label: string, name:ProductNameTypes) =>{
        return(
          <div className="flex flex-col">
          <label htmlFor={id} 
              className="mb-[2px] text-sm font-medium text-gray-700">
         
         {label}
         </label>
          <Input type="text" id={id} name={name}   
       className='border-2 border-gray-350' value={productToEdit[name]} 
           onChange={onChangeEditHandler} />
          <ErrorMessage msg={errors[name]} /> 
         </div> )
        }


  return (
    <main className='container mx-auto'>
       <div className='flex justify-between items-center'>
        <span></span>
      <Button onClick={openModal} 
      className="bg-indigo-950 hover:bg-indigo-800 
      w-fit  mt-5"> Add new product </Button> 
            <span></span>
            
       </div>
      

       <div className='flex justify-between items-center gap-4 p-8 '>
        {/* add model  */}
        <ModalD isOpen={isOpen} closeModal={closeModal} 
        title='add new product'>
          <form onSubmit={submitHandler}>
            <div className='m-5 flex flex-col space-y-4'>
              {renderFormInputList}

              <Select selected={selectedCategory} setSelected={setSelectedCategory} />

              <div className='flex justify-start items-center space-x-1'>
                {RenderProductColor}
                </div>

                <div className='flex flex-wrap justify-start items-center 
                space-x-1'>
                {tempColors.map(color =>
                <span key={color} color={color} 
                className='text-white p-1 m-1 rounded-md text-xs'
                style={{ backgroundColor: color }}>
                  {color}</span>)}
                </div>
                   

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
        {/* add model  */}

  

        {/* edit model */}
        <ModalD isOpen={isOpenEditModal} closeModal={closeEditModal} 
        title='Edit product'>
          <form onSubmit={submitEditHandler}>
            <div className='m-5 flex flex-col space-y-4'>
              {/* {renderProductEditWithErrorMsg()} */}
    {renderProductEditWithErrorMsg("title", "Product Title", "title")}
{renderProductEditWithErrorMsg("descreption", "Product Description", "descreption")}
 {renderProductEditWithErrorMsg("imageURL", "Product Image URL", "imageURL")}
  {renderProductEditWithErrorMsg("price", "Product Price", "price")}
              {/* {renderFormInputList} */}
        
        <Select selected={productToEdit.categorys} 
    setSelected={(value) => setProductToEdit({...productToEdit,categorys:value})} />

              <div className='flex justify-start items-center space-x-1'>
                {RenderProductColor}
                </div>

          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.concat(productToEdit.colors).map(color => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>


                {/* <div className='flex flex-wrap justify-start items-center 
                space-x-1'>
                {tempColors.map(color =>
                <span key={color} color={color} 
                className='text-white p-1 m-1 rounded-md text-xs'
                style={{ backgroundColor: color }}>
                  {color}</span>)}
                </div> */}
                   

              </div>
          <div className='flex items-center justify-center space-x-5'>
            
          <Button onClick={onCancel}
          className="bg-rose-400 hover:bg-rose-300 text-black">
            Cancel</Button>
          <Button 
          className="bg-indigo-950 hover:bg-indigo-800">
           Edit</Button> 
            </div>
          </form>
        </ModalD>
        {/* edit model */}

        {/* DELETE PRODUCT CONFIRM MODAL */}
      <ModalD
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
     title="Are you sure you want to remove this Product from your Store?"
      >
        <div className="flex items-center space-x-3">
          <Button className="bg-[#c2344d] hover:bg-red-800" 
          onClick={removeProductHandler}>
            Yes, remove
          </Button>
          <Button type="button" 
          className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" 
          onClick={closeConfirmModal}>
            Cancel
          </Button>
        </div>
      </ModalD>
       {/* DELETE PRODUCT CONFIRM MODAL */}

        </div> 
           <div className='p-4 m-5 rounded-2xl
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6'>
      
    {RenderProductList}
    </div>
   
     <Toaster />
    </main>
  )
}

export default App
