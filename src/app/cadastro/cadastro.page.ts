import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public usuario: Usuario = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public async salvar() {
    this.userService.cadastrar(this.usuario).subscribe(retorno => {
      this.usuario = retorno;
    });
  }

}
