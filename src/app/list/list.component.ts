import { Component } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public products: any;
  isUpdateFormVisible: boolean = false;
  selectedProductId: string | null = null;

  constructor(private productService: ChannelService, private router: Router) {}

  async ngOnInit() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  onClickDelete(id: string) {
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        window.alert('Product deleted successfully');
        window.location.reload();
      },
      (error) => {
        window.alert('Failed to delete product');
      }
    );
  }

  onClickEdit(product: any) {
    this.router.navigate(['/update'], { queryParams: product });
  }
}
