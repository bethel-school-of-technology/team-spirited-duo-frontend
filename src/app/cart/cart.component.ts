import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let url = 'http://localhost:3000/cart';
    
    this.http.get(url).subscribe((response) => {
      console.log(response);
      this.cart = response;
    });
  }
  deleteFromCart(id: number): void {
    let url = 'http://localhost:3000/cart/' + id;
    this.http.delete(url).subscribe((response) => {
      alert('Cart item deleted successfully');
      this.ngOnInit();
    })
  };
  updateQuantity(id: number, name: string, image:string, quantity: number): void{
    let url = 'http://localhost:3000/cart/' + id;
    let cart = {
      id: id, name: name, image: image, quantity: quantity
    };
    this.http.put(url, cart ).subscribe((response) => {
      alert('Cart item updated successfully');
      this.ngOnInit();
    })
  }


}
