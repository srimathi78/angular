import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({ 
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   pageTitle: string = 'Product Detail';
   product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
   private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id} `;
    this.product = {
      'productId':id,
      'productName': 'leaf Rake',
      'productCode': 'GDN=001',
      'releaseDate'  : 'march 19, 2021',
      'description': 'leaf rake with 48-inch woden handle.',
      'price': 19.05,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
      };
  }
  onBack(): void {
     this.router.navigate(['/products']);
  }

}
