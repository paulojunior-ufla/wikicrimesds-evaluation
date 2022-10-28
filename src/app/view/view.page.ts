import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})


export class ViewPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  async help(){
    await this.showAlert("Ajuda", "Para visualizar os dados de um AISP selecione um tipo (RR ou SIR), o ano e clique sobre o pin que está na região desejada.");
  }

  goToHome(){
    this.router.navigateByUrl('/home', { replaceUrl: true });
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


