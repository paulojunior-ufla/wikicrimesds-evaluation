import { Component } from '@angular/core';
import { RangeValue } from '@ionic/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';
import { DataService, Data } from '../services/data.service';

@Component({
  selector: 'app-rr',
  templateUrl: './rr.page.html',
  styleUrls: ['./rr.page.scss'],
})

export class RrPage {
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
  showRegions: any;
  imgLoad: boolean = false;

  constructor(
    private dataService: DataService,
    private alertController: AlertController
  ) { }

  getMonthValue(ev: Event) {
    this.monthValue = (ev as RangeCustomEvent).detail.value;
    this.month = parseInt(this.monthValue.toString());
    this.getMap(this.year);
    this.getMonthName(this.monthValue);
  }

  async getArrayData(year){
    this.dataService.getData(year).subscribe(res => {
      this.arrayData = res;
    }); 
  }

  getMap(year){
    this.imgLoad = false;
    this.year = year;
    this.imageName = "rr/"+ this.year + "/" + this.month +"-"+ year+".png";
    this.legendImage = "rr/"+ this.year + "/" + "legend.png";
  }

  getMonthName(monthValue){
    if(monthValue == 1){
      this.monthName= "Janeiro";
    }else if(monthValue == 2){
      this.monthName = "Fevereiro";
    }else if(monthValue == 3){
      this.monthName = "Março";
    }else if(monthValue == 4){
      this.monthName = "Abril";
    }else if(monthValue == 5){
      this.monthName = "Maio";
    }else if(monthValue == 6){
      this.monthName = "Junho";
    }else if(monthValue == 7){
      this.monthName = "Julho";
    }else if(monthValue == 8){
      this.monthName = "Agosto";
    }else if(monthValue == 9){
      this.monthName = "Setembro";
    }else if(monthValue == 10){
      this.monthName = "Outubro";
    }else if(monthValue == 11){
      this.monthName = "Novembro";
    }else if(monthValue == 12){
      this.monthName = "Dezembro";
    }
  }

  getData(n){
    for (let l of this.arrayData) {
      if((l.name == n) && (l.year == this.year) && (l.month  == this.month)){
        let header =  n + "° IAPS";
        let msg = this.regions[n - 1] +
        "<br>" + " Período: "+ this.monthName + "/" + this.year + "<br>" +
       " Crimes: "+ l.crimes + "<br>" +
        " População: "+ l.population + "<br>" +
        " RR: "+ l.rr + "<br>";
        this.showAlert(header, msg)
      }
    }
  }

  previous(){
    if(this.month == 1){
      this.month = 12
    } else{
      this.month -= 1
    }
    this.getMap(this.year);
    this.getMonthName(this.month);
  }

  next(){
    if(this.month == 12){
      this.month = 1
    } else{
      this.month += 1
    }
    this.getMap(this.year);
    this.getMonthName(this.month);
  }

  showRegionsImage(){
    if(this.showRegions == true){
      this.imageName = "mapa.png";
    }else{
      this.imageName = "sir/"+ this.year + "/" + this.month +"-"+ this.year+".png";
    }
  }

  imgWillLoad(){
    this.imgLoad = true;
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      cssClass: 'custom-alert',
      message,
      buttons: [
        {
         text: 'OK',
          cssClass: 'alert-button-confirm'
        }
       ]
    });
    await alert.present();
  }
}
