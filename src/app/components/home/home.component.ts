import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private userService: UsersService) {
    this.userService.getUsers();
  }

  ngOnInit() {}
}
