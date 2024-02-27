export interface IProductLists {
    // id:number | undefined;
    id?: string | undefined;
    title:string;
    descreption:string;
    price:string;
    imageURL:string;
    colors:string[];
    categorys:{
        name: string,
        imageURL:string
    }
}

export interface IFormInput {
    id: string;
    name: 'title' |'descreption'|'price' |'imageURL'; 
    label: string;
    type: string;
  }

  export interface ICategory {
    id: string;
    name: string;
    imageURL: string;
  }