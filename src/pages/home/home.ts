import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestricoesPage } from '../restricoes/restricoes';
import { RelatorioPage } from '../relatorio/relatorio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  leite: number;
  racao: number;
  feno: number;

  emitirRelatorio(){
    this.navCtrl.push(RelatorioPage,{leite: this.leite, racao: this.racao, feno: this.feno});
  }

}
