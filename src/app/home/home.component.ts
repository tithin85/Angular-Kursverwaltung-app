import { Component, OnInit} from "@angular/core";
import { UserService } from '../_services/user.service';
import {FormatterService} from "../_services/formatter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private userService: UserService, public formatter: FormatterService) { }

  ngOnInit(): void { }
}
