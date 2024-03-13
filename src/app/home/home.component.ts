import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HeroService } from '../Service/hero.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(
  private heroServic: HeroService
){}

ionIcons = this.heroServic.ionIcons;

ngOnInit(): void {
  
}

}
