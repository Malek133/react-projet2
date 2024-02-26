import Images from "./Images"
import { IProductLists } from "./Interface";
import Button from "./ui/Button"
import { Trash2 , FilePenLine } from 'lucide-react';
import {textslice} from './Fuctions'
import CircleColors from "./CircelColors";
interface IProps{
    product:IProductLists
}

const ProductCard = ({product}:IProps) => {
    const {title,descreption,price,imageURL,categorys,colors} = product;

    // const RenderProductColor= colors.map(color => 
    //     <CircleColors key={color} color={color}  />)
    const RenderProductColor = colors.map(color => 
    <CircleColors key={color} color={color} />);

  return (
    <div className=" max-w-sm md:max-w-lg border-2 border-gray-250 text-center 
    px-4 py-3 mt-6 rounded-lg d-flex 
    flex-column justify-content-between">

    <Images 
    imageURL={imageURL} 
    alt="hllo" 
    className="rounded-md container w-35 h-25 flex justify-center" /> 

    <h3 className="text-2xl mt-3">{title}</h3>

    <p className="text-gray-500 mt-2">
        {textslice(descreption)} </p>

     
    <div className="flex gap-2 items-center">
              <div className='flex justify-start items-center space-x-1'>
                {RenderProductColor}
                </div>
    {/* <div className="h-5 w-5  rounded-full bg-slate-500" />
    <div className="w-5 h-5 rounded-full bg-red-500" />
    <div className="w-5 h-5 rounded-full bg-emerald-700" /> */}
    </div>

    <div className="flex justify-between items-center m-3 gap-2">
        <span className="text-xl">{price} $</span>

        <img className="w-11 h-11 rounded-full" 
        src={categorys.imageURL} alt={categorys.name} />
    </div>

    <div className="flex justify-around items-center space-x-2 mt-6">
        <Button  onClick={()=> console.log('clicked')} 
        className="bg-blue-600"><FilePenLine /></Button>
        <Button className="bg-red-600"><Trash2 /></Button>
    </div>

    </div>
  )
}

export default ProductCard