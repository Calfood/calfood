import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RelatorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html',
})
export class RelatorioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leite: number = this.navParams.data.leite;
  racao: number = this.navParams.data.racao;
  feno: number = this.navParams.data.feno;
  doismeses: number = this.navParams.data.doismeses;
  doisaseismeses: number = this.navParams.data.doisaseismeses;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioPage');
  }

}
