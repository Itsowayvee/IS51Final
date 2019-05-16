import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';
import { userInfo } from 'os';
import { LocalStorageService } from '../localStorageService';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Iuser: any = { username: null, password: null };
  localStorageServe: LocalStorageService<IUser>
  constructor(private router: Router, private toastService: ToastService) {

  }
};

ngOnInit() {

}

Login(user: IUser) {
  // console.log('from login user: ', user);
  const defaultUser = { username: 'Vee', password: 'Vee123' };
  this.router.navigate(['contacts', user])
  if (user.username === defaultUser.username && user.password === defaultUser.password) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['contacts', user]);
    // console.log('from within if statement...');
  } else {
    // console.log('Must specify credentials');
    this.toastService.showToast('danger', 2000, 'Username or Password is Incorrect!');
  } else {
    this.toastService.showToast('warning', 3000, 'Please specify credentials')
  }
}

}
