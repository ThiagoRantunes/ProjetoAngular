import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {

 resultado: string = "0";

 num: string = "        ";

 por: number = 0;

 conta = false;

 p = false;

operacoes(valor1: string){
  this.num += valor1;
  this.resultado = this.num
  this.p = false;
}

 numeros(valor1: string){
    this.num += valor1;
    this.resultado = this.num
 }
 ponto(valor1: string){
  if(this.p == false){
    this.num += valor1;
    this.resultado = this.num
    this.p = true;
  }
  
 }
 igual(valor1: number){
      this.resultado = eval(this.num);
      this.conta = true;
      this.p = false;
 }
 ac(valor1: number){
  this.resultado = "0";
  this.num = "        ";
 }

 porcento: string = "/ 100"

 porcentagem(){
  this.resultado = eval(this.resultado + this.porcento);
 }

}   
  
 // digito = false;

  // somar = false;
  // menos = false;
  // vezes = false;
  // dividir = false;

  // conta1: number[] = [];
  // conta2: number[] = [];
  // resultado: number = 0;

  // numeros(valor1: number){
  //   if(this.digito == false){
  //     this.resultado = valor1;
  //     this.conta1.push(valor1);
  //   }else{
  //     this.resultado = valor1;
  //     this.conta2.push(valor1);
  //   }
    
  // }

  // ac(valor1: number){
  //   this.digito = false;
  //   this.somar = false;
  //   this.menos = false;
  //   this.vezes = false;
  //   this.dividir = false;
  //   this.resultado = 0;
  //   this.conta1.pop();
  //   this.conta2.pop();
  // }

  // soma(valor2: number){
  //   this.somar = true;
  //   this.digito = true;
  //   } 
  // menoss(valor1: number){
  //   this.menos = true;
  //   this.digito = true;
  // }
  // vezess(valor1: number){
  //   this.vezes = true;
  //   this.digito = true;
  // }
  // dividirr(valor1: number){
  //   this.dividir = true;
  //   this.digito = true;
  // }
  
  //   igual(valor3: number){
  //     if(this.somar == true){
  //       this.resultado = this.conta1[0] + this.conta2[0];
  //     }else if(this.menos == true){
  //       this.resultado = this.conta1[0] - this.conta2[0];
  //     }else if(this.vezes == true){
  //       this.resultado = this.conta1[0] * this.conta2[0];
  //     }else if(this.dividir == true){
  //       this.resultado = this.conta1[0] / this.conta2[0];
  //     }
  //   }
