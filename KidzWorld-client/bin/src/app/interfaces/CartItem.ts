import { Product } from "../services/ProductService/productservice.service";

export default interface CartItem {
    product: Product;
    quantity: number;
}