import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { CommonModule } from '@angular/common'; // Para usar *ngFor y *ngIf
import { FormsModule } from '@angular/forms'; // Importa FormsModule si usas standalone

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule], // Necesario para las directivas como *ngFor
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isEditMode: boolean = false;

  constructor(private productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    await this.loadProducts();
  }

  // Carga los productos desde la API
  private async loadProducts(): Promise<void> {
    try {
      //this.product = await this.productService.getAllProducts();
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await this.productService.deleteProduct(id);
      await this.loadProducts(); // Recargar los productos después de eliminar
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  async onSubmit(product: Product): Promise<void> {
    try {
      if (this.isEditMode) {
        // Actualizar producto
        await this.productService.updateProduct(product.id, product);
        this.isEditMode = false;
      }
      await this.loadProducts(); // Recargar productos después de actualizar
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  }
}
