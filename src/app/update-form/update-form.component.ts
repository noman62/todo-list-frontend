import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent {
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ChannelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.product['_id'] = params['_id'];
      this.product['productName'] = params['productName'];
      this.product['unitPrice'] = params['unitPrice'];
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.product._id, this.product).subscribe(
      (response) => {
        window.alert('Product updated successfully');
        this.router.navigate(['/']);
      },
      (error) => {
        window.alert('Error updating product');
      }
    );
  }
}
