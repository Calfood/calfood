import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlpkProvider } from '../../providers/glpk/glpk';
import { RestricoesPage } from '../restricoes/restricoes';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: GlpkProvider) { 
    
    this.provider.sendRequest(this.navParams.data).subscribe(
      data=>{
        console.log(data)
        var response = (data as any);
        var retorno = JSON.parse(response._body);
        this.custo_minimo = retorno.custo_minimo.toString().replace('.',',');
        this.qtd_racao = retorno.racao.toString().replace('.',',');
        this.qtd_leite = retorno.leite.toString().replace('.',',');
        this.qtd_feno = retorno.feno.toString().replace('.',',');
      },
      error=>{
        console.log(error);
      }
    );
  }

  custo_leite: number = this.navParams.data.leite;
  custo_racao: number = this.navParams.data.racao;
  custo_feno: number = this.navParams.data.feno;
  
  custo_minimo: number = 0;
  qtd_leite: number = 0;
  qtd_racao: number = 0;
  qtd_feno: number = 0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioPage');
  }

  
  emitirDualidade() {
    this.navCtrl.push(RestricoesPage);
  }

}
