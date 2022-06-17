import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('http://localhost:3000/categories').subscribe((response)=>{
        console.log(response);
        this.categories = response;
      });


      // this.http.post('http://localhost:3000/categories', {name:'testcateogry'}).subscribe();
  }

}
