import { Component, OnInit } from '@angular/core';
import { RangeValue } from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rr',
  templateUrl: './rr.page.html',
  styleUrls: ['./rr.page.scss'],
})
export class RrPage implements OnInit {
  valueMounth: RangeValue;
  nameMounth: string = "Janeiro";
  mounth: string = "1";
  nameImage = "imgStart.png";
  year: string = "";
  nameLegend = "imgStart.png";

  constructor(
    private router: Router
  ) { }

  getValueMounth(ev: Event) {
    this.valueMounth = (ev as RangeCustomEvent).detail.value;
    this.mounth = this.valueMounth.toString();
    this.getMap(this.year);

    if(this.valueMounth == 1){
      this.nameMounth = "Janeiro";
    }else if(this.valueMounth == 2){
      this.nameMounth = "Fevereiro";
    }else if(this.valueMounth == 3){
      this.nameMounth = "Março";
    }else if(this.valueMounth == 4){
      this.nameMounth = "Abril";
    }else if(this.valueMounth == 5){
      this.nameMounth = "Maio";
    }else if(this.valueMounth == 6){
      this.nameMounth = "Junho";
    }else if(this.valueMounth == 7){
      this.nameMounth = "Julho";
    }else if(this.valueMounth == 8){
      this.nameMounth = "Agosto";
    }else if(this.valueMounth == 9){
      this.nameMounth = "Setembro";
    }else if(this.valueMounth == 10){
      this.nameMounth = "Outubro";
    }else if(this.valueMounth == 11){
      this.nameMounth = "Novembro";
    }else if(this.valueMounth == 12){
      this.nameMounth = "Dezembro";
    }
  }

  ngOnInit() {
  }

  getMap(year){
    this.year = year;
    this.nameImage = "rr/"+ this.year + "/" + this.mounth +"-"+ year+".png";
    this.nameLegend = "rr/"+ this.year + "/" + "legend.png";
  }

  backMounth(){
    console.log(this.mounth);
  }

  nextMouth(){
    console.log(this.mounth);
  }
}
