import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  currentToken: string = undefined;

  constructor(private tokenSrv: TokenService) { }

  ngOnInit(): void {
    this.currentToken = this.tokenSrv.getCurrentToken();
  }
}
