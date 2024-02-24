export interface IProductLists {
    id:number | undefined;
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