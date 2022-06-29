import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  public products: any;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute) { }

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

}




