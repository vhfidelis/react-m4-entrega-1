interface IProduct {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
type TNewProduct = Pick<IProduct, "name" | "price">;
type TUpdateProduct = Partial<TNewProduct>;

export { IProduct, TNewProduct, TUpdateProduct };
