export class List_Product {

  id: number;
  name: string;
  stock: number;
  price: number;
  createdDate: Date;
  updatedDate: Date;

  constructor(id: number, name: string, stock: number, price: number, createdDate: Date, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}