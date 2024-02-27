import {IProductLists,IFormInput,ICategory} from '../Interface'
import { v4 as uuid } from "uuid";
export const DataListes:IProductLists[] = [

  {
    id:uuid(),
    title:"BMW",
    descreption:"ounded in 1916, Bavarian Motor Works or BMW is a German multinational company that is headquartered in Bavaria, they produce cars and motorcycles",
    imageURL:"https://i.pinimg.com/564x/08/b9/0e/08b90e17d3cd9e5f23523c192e63eb61.jpg",
    price:"45512",
    colors:["#000000","#A31ACB","#e5c214"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/08/b9/0e/08b90e17d3cd9e5f23523c192e63eb61.jpg",
    }
  },
  {
    id:uuid(),
    title:"KIA",
    descreption:"KIA vector logo 2021 available to download for free. New KIA brand logo in vector (.EPS + .AI + .SVG + .CDR) format",
    imageURL:"https://i.pinimg.com/564x/30/74/1b/30741ba5dd1db6c9e550d526e643363e.jpg",
    price:"21245",
    colors:["#000000","#e51414","#A31ACB"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/30/74/1b/30741ba5dd1db6c9e550d526e643363e.jpg",
    }
  },
  {
    id:uuid(),
    title:"TESLA",
    descreption:"Tesla Logo HD iPhone Wallpapers #tesla #zicxa #image #logo #wallpaper",
    imageURL:"https://i.pinimg.com/564x/e4/88/77/e488777d759169c74b74aa95f07adbed.jpg",
    price:"65554",
    colors:["#000000","#e51414","#e5c214"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/e4/88/77/e488777d759169c74b74aa95f07adbed.jpg",
    }
  },
  {
    id:uuid(),
    title:"VOLSWAGEN",
    descreption:"Volkswagen has rolled out its latest fully electric production car at the same time as an updated logo and brand design to mark",
    imageURL:"https://i.pinimg.com/564x/a6/30/ba/a630ba687c931d7fa898bc5f6b889750.jpg",
    price:"56405",
    colors:["#2563eb","#e51414","#e5c214"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/a6/30/ba/a630ba687c931d7fa898bc5f6b889750.jpg",
    }
  },
  {
    id:uuid(),
    title:"AUDI",
    descreption:"Parlant de l`apparence, l`ergonomie et la qualité, les autos produits par les marques des voitures allemandes sont la tête et les épaules par comparaison",
    imageURL:"https://i.pinimg.com/564x/0e/de/fd/0edefd62efd2340eb1f60acaf7c29464.jpg",
    price:"77740",
    colors:["#000000","#e51414","#2563eb"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/0e/de/fd/0edefd62efd2340eb1f60acaf7c29464.jpg",
    }
  },
  {
    id:uuid(),
    title:"TOYOTA",
    descreption:"Our Toyota interior accessories include seat lift blocks, under seat mount gear panels, and under seat air compressor mount. Join our newsletter to hear what we're releasing",
    imageURL:"https://i.pinimg.com/564x/67/bc/f9/67bcf94654a650c98bba09bc6e0454c0.jpg",
    price:"66776",
    colors:["#000000","#e51414","#a855f7"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/67/bc/f9/67bcf94654a650c98bba09bc6e0454c0.jpg",
    }
  },
  {
    id:uuid(),
    title:"FIAT",
    descreption:"FIAT car vinyl sticker / decal. made with quality vinyl. several colors and sizes are availabl",
    imageURL:"https://i.pinimg.com/564x/95/ad/74/95ad745d2ec26531c32fac9083862dd6.jpg",
    price:"19870",
    colors:["#a855f7","#e51414","#e5c214"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/95/ad/74/95ad745d2ec26531c32fac9083862dd6.jpg",
    }
  },
  {
    id:uuid(),
    title:"Renault",
    descreption:"New Renault logo vector and high quality transparent PNG images. Free download Renault logo 2021 vector, logomark, icons and logotype in vecto",
    imageURL:"https://i.pinimg.com/564x/c3/29/72/c3297273fb09684d7ef87d5399a688cf.jpg",
    price:"32377",
    colors:["#000000","#a855f7","#e5c214"],
    categorys:{
      name:"",
      imageURL:"https://i.pinimg.com/564x/c3/29/72/c3297273fb09684d7ef87d5399a688cf.jpg",
    }
  }
]


export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "descreption",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#edc70b",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Camera",
    imageURL:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];



