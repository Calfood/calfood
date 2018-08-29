import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelatorioPage } from '../relatorio/relatorio';

/**
 * Generated class for the RestriçõesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restricoes',
  templateUrl: 'restricoes.html',
})
export class RestricoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leite: number = this.navParams.data.leite;
  racao: number = this.navParams.data.racao;
  feno: number = this.navParams.data.feno;
  doismeses: number;
  doisaseismeses: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestricoesPage');
  }

  emitirDualidade() {

    this.navCtrl.push(RelatorioPage,{leite: this.leite, racao: this.racao, feno: this.feno, doismeses: this.doismeses, doisaseismeses: this.doisaseismeses});

  }

}
