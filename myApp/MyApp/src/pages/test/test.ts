import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {PhotoService} from "../../service/photoService";
import {errorHandler} from "@angular/platform-browser/src/browser";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  images = []
  constructor(
    public navCtrl: NavController,
    private photoService: PhotoService
  ) {
  }

  ngOnInit():void{
    this.photoService.getPhotoList()
      .subscribe(
        response =>{
          this.images = response
        },
        error=>{
          console.log(error)
        }
      )
  }

}
