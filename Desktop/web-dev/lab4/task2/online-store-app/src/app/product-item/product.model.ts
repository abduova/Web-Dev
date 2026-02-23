export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public rating: number,
    public image: string,
    public images: string[],
    public link: string
  ) {}
}