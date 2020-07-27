import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'CovidRecovery';
  userName: string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userName = history.state.obj;
  }

}
