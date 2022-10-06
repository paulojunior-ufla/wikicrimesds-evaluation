import { Component, OnInit } from '@angular/core';
import { RangeValue } from '@ionic/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Data } from '../services/data.service';

@Component({
  selector: 'app-rr',
  templateUrl: './rr.page.html',
  styleUrls: ['./rr.page.scss'],
})
export class RrPage implements OnInit {
  monthValue: RangeValue;
  monthName: string = "Janeiro";
  month: number = 1;
  imageName = "imgStart.png";
  year: number = 0;
  legendImage = "imgStart.png";
  arrayData: Data[] = [];
  regions: string[] = [
    "Curitiba", "São José dos Pihais", "Paranaguá", "Ponta Grossa", "São Mateus do Sul", "União da Vitória",
    "Guarapuava", "Laranjeiras do Sul", "Pato Branco", "Francisco Beltrão", "Cascavel", "Foz do Iguaçu", 
    "Toledo", "Campo Mourão", "Umuarama", "Paranavaí", "Maringá", "Apucarana", "Rolândia", "Londrina", 
    "Cornélio Procópio", "Telêmaco Borba","Jacarezinho"
  ]

  constructor(
    private router: Router,
    private dataService: DataService,
    private alertController: AlertController
  ) { }

  getMonthValue(ev: Event) {
    this.monthValue = (ev as RangeCustomEvent).detail.value;
    this.month = parseInt(this.monthValue.toString());
    this.getMap(this.year);

    if(this.monthValue == 1){
      this.monthName= "Janeiro";
    }else if(this.monthValue == 2){
      this.monthName = "Fevereiro";
    }else if(this.monthValue == 3){
      this.monthName = "Março";
    }else if(this.monthValue == 4){
      this.monthName = "Abril";
    }else if(this.monthValue == 5){
      this.monthName = "Maio";
    }else if(this.monthValue == 6){
      this.monthName = "Junho";
    }else if(this.monthValue == 7){
      this.monthName = "Julho";
    }else if(this.monthValue == 8){
      this.monthName = "Agosto";
    }else if(this.monthValue == 9){
      this.monthName = "Setembro";
    }else if(this.monthValue == 10){
      this.monthName = "Outubro";
    }else if(this.monthValue == 11){
      this.monthName = "Novembro";
    }else if(this.monthValue == 12){
      this.monthName = "Dezembro";
    }
  }

  ngOnInit() {
  }

  getMap(year){
    this.year = year;
    this.imageName = "rr/"+ this.year + "/" + this.month +"-"+ year+".png";
    this.legendImage = "rr/"+ this.year + "/" + "legend.png";
  }

  backMonth(){
    console.log(this.month);
  }

  nextMoth(){
    console.log(this.month);
  }

  async getArrayData(year){
    this.dataService.getData(year).subscribe(res => {
      this.arrayData = res;
    }); 
  }

  getData(n){
    console.log(this.regions[n - 1])
    for (let l of this.arrayData) {
      if((l.name == n) && (l.year == this.year) && (l.month  = this.month)){
        let header = this.regions[n - 1];
        let msg = " Período: "+ this.monthName + "/" + this.year + "<br>" +
       " Crimes: "+ l.crimes + "<br>" +
        " População: "+ l.population + "<br>" +
        " RR: "+ l.rr + "<br>";
        this.showAlert(header, msg)
      }
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
