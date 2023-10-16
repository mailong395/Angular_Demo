import { CartService } from './../cart.service';
import { Product, products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined

  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
  ) {}

  ngOnInit(): void {
    const routerParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParam.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product) {
    this.CartService.addToCard(product)
    window.alert('Your product have been added to the cart!');
  }
}
