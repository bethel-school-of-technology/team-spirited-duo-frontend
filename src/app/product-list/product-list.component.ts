import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  public products: any;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let url = 'http://localhost:3000/products';
    if(this.actRoute.snapshot.params['categoryId']) {
      url = url + '?categoryId=' + this.actRoute.snapshot.params['categoryId']
    }

    this.http.get(url).subscribe((response) => {
      console.log(response);
      this.products = response;
    });


  }
  addToCart(id: number, name:string, image:string){
    alert('started add tocart');
    let cart = {
      productId: id, name: name, image: image, quantity: 1
    };
    this.http.post<any>("http://localhost:3000/cart", cart)
            .subscribe(res => {
              alert("You have successfully added item to cart");
              /*this.router.navigate(['cart']);*/
            })
  }

}




