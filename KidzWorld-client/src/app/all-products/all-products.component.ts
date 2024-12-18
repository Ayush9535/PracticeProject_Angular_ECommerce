import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import data from '../../../finalData';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService , Product} from '../services/ProductService/productservice.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  products: Product[] = [];
  productType: string = "";
  filteredProducts: any[] = []; 
  searchQuery: string = ''; 
  priceFilter: string = ''; 
  paginatedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 50;

  constructor(
    private CartSvc: CartserviceService, 
    private route: ActivatedRoute, 
    private productSvc : ProductserviceService,
    private toastService: HotToastService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productType = params.get('type') || '';
      this.productSvc.getProductsByCategory(this.productType).subscribe((products) => {
        this.products = products;
        this.filteredProducts = [...this.products];
        this.filterProducts();
      });
    });

    
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch =
        !this.searchQuery ||
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesPrice =
        !this.priceFilter ||
        (this.priceFilter === 'low' && product.price < 10) ||
        (this.priceFilter === 'medium' && product.price >= 10 && product.price <= 15) ||
        (this.priceFilter === 'high' && product.price > 15);

      return matchesSearch && matchesPrice;
    });

    this.currentPage = 1; 
    this.updatePaginatedProducts();
  }

  addToCartClicked(book: any) {
    console.log('Add to cart clicked:', book);
    this.CartSvc.addToCart(book.id).subscribe((data) => {
      console.log(data)
      this.toastService.success('Item added to cart');
    });
  }

  setSearchQuery(event: any) {
    this.searchQuery = event.target.value;
    this.filterProducts();
  }

  setPriceFilter(event: any) {
    this.priceFilter = event.target.value;
    this.filterProducts();
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }
}
