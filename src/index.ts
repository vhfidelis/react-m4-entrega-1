import { IProduct, TUpdateProduct, TNewProduct } from "./interfaces";

class ProductListServices {
  private id: number = 1;
  private productList: IProduct[] = [];

  getProducts() {
    return this.productList;
  }
  getOneProduct(productId: number) {
    const index = this.productList.findIndex(
      (product) => product.id === productId
    );
    const product = this.productList[index];
    return product;
  }

  createProduct(data: TNewProduct) {
    const date = new Date();
    const newProduct = {
      ...data,
      id: this.id,
      createdAt: date,
      updatedAt: date,
    };
    this.productList.push(newProduct);
    this.id++;
    return newProduct;
  }
  updateProduct(id: number, data: TUpdateProduct) {
    const date = new Date();
    const index = this.productList.findIndex((product) => product.id === id);
    const currentProduct = this.productList[index];
    const updatedProduct = {
      ...currentProduct,
      ...data,
      updatedAt: date,
    };
    this.productList.splice(index, 1, updatedProduct);
    return updatedProduct;
  }

  deleteProduct(removingId: number) {
    const index = this.productList.findIndex(
      (product) => product.id === removingId
    );
    this.productList.splice(index, 1);
    return { message: "Product successfully deleted." };
  }
}

export const productList = new ProductListServices();
