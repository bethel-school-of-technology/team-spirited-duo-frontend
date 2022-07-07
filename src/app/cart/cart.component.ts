import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cartItem } from './../carts/cartItem'; 

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
  checkOut(cartItems: cartItem[]): void {
    let userId = localStorage.getItem ("userId");
    if(userId == null) {
      alert("Please login first");
    }
    else if(cartItems.length == 0) {
      alert("Please add items to your cart");}
    else{
    let order = {
      userId: userId, 
      date: new Date(), 
    }
    let orderUrl = 'http://localhost:3000/orders/'
    let orderItemsUrl = 'http://localhost:3000/orderItems'
    this.http.post(orderUrl, order).subscribe((response: any) => {
      
      cartItems.forEach((cartItem) => {
        let orderItem = {
          orderId: response.id,
          name: cartItem.name,
          image: cartItem.image,
          quanity: cartItem.quantity
        }
        this.http.post(orderItemsUrl, orderItem).subscribe(() =>{
        let cartUrl = 'http://localhost:3000/cart/' + cartItem.id;
        this.http.delete(cartUrl).subscribe(() =>{
        });
        
        
        })
      
    })
  });
  alert('Order created successfully');
  this.ngOnInit();


}
}
}