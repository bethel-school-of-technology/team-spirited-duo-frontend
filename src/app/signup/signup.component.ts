import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      phoneNumber: [''],
      email: [''],
      password: [''],


    })

  }
  signUp() {
    this.http.get<any>("http://localhost:3000/userSignUp")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.signupForm.value.email;
        });
        if (user) {
          alert("This email user already exist!");
        } else {
          this.http.post<any>("http://localhost:3000/userSignUp", this.signupForm.value)
            .subscribe(res => {
              alert("You have successfully signed up");
              this.signupForm.reset();
              this.router.navigate(['login']);
            })
        }
      })

  }

}
