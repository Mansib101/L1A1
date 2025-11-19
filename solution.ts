function formatValue(input : string| number| boolean): any{
    if(typeof(input) == "string"){
        return input.toUpperCase()
    }
    else if(typeof(input) == "number"){
        return input*10;
    }   
    else if(typeof(input) == "boolean"){
        return !input;
    }
}
function getLength(value: string | any[]): number {
    if (Array.isArray(value)) {
        return value.length;
    } else {
        return value.length;
    }
}
class Person{
    constructor (public name : string, public age: number){}
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
interface Item {
  title: string;
  rating: number; 
}
function filterByRating(items: Item[]): Item[]{
    const filteredItems: Item[] = items.filter((item: Item)=>{
        return item.rating >=4;
    });
    return filteredItems;
}
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function getBookDetails(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author},
   Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
}
function getUniqueValues(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            const value = result[j];
            if (value === arr1[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) (result as any)[result.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            const value = result[j];
            if (value === arr2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) (result as any)[result.length] = arr2[i];
    }
    return result;
}
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    let discountedPrice = basePrice;

    if (product.discount !== undefined && product.discount >= 0 && product.discount <= 100) {
      const discountFactor = 1 - (product.discount / 100);
      discountedPrice = basePrice * discountFactor;
    }

    return total + discountedPrice;
  }, 0);
};