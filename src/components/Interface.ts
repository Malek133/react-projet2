export interface IProductLists {
    // id:number | undefined;
    id?: string;
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
    name: string;
    label: string;
    type: string;
  }