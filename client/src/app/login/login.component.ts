import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { userModel} from '../register/userModel';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private _auth: AuthService,
              private _router: Router) { }
              loginUserData = new userModel(null!,null!,null!);

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/chat'])
      },
      err => console.log(err)
    ) 
  }

}