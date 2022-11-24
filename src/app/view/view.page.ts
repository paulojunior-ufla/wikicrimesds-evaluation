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
    await this.showAlert(
      "Help", "To view the data of an IAPS select one "+
      "type (RR or SIR), the year and click on the pin that is in the desired region.")
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


