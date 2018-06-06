import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  Glpk  from 'glpk';

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
    
    //Glpk.Problem();
    //Glpk();

  }

  //opa: any = new Glpk();
  //opa: any = new Glpk.Problem();

  leite: number = this.navParams.data.leite;
  racao: number = this.navParams.data.racao;
  feno: number = this.navParams.data.feno;
  doismeses: number = this.navParams.data.doismeses;
  doisaseismeses: number = this.navParams.data.doisaseismeses;

  
  total_racao: number = this.doisaseismeses * 4 * 120;
  total_kg: number = this.total_racao / 50;
  total_saco: number = Math.round(this.total_racao / 50);
  sobra:number = this.total_racao/50 - this.total_saco;
  
  valor_total_saco: number = Math.round(this.total_saco) * this.racao;

  total_leite: number = (this.doismeses * 4 * 60) + this.total_racao - ((Math.round(this.total_saco) - 1) * 40);
  valor_total_leite: number = this.total_leite * this.leite;

  total_gasto_leite: number = this.valor_total_leite + ((Math.round(this.total_saco) - 1) * this.racao);



  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioPage');
  }

}
