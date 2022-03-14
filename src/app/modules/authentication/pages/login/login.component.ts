import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  myformLogin: FormGroup = this.fb.group({
    usuario: new FormControl('',Validators.required), //1 forma
    clave: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]] //2 forma
  });
  ngOnInit(): void {

  }
  currentUser : User={username:'',
                      password:''};
  send(){
    this.currentUser={username:this.myformLogin.value.usuario,password:this.myformLogin.value.clave}
    console.log('usuario=',this.currentUser.username);
    console.log('clave=',this.currentUser.password);
    console.log("formulario: "+'');
    this.authService.isSendUser(this.currentUser); //envia el usuario ingresado al servicio
    this.router.navigateByUrl('/music/home');

  }
  get clave(){ return this.myformLogin.value.clave;}


}
