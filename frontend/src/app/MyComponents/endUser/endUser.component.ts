import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { EndUserService } from 'src/app/MyServices/endUser.service';
import { endUser } from './endUser';

@Component({
  selector: 'app-endUser',
  templateUrl: './endUser.component.html',
  styleUrls: ['./endUser.component.css']
})
export class endUserComponent implements OnInit {

  user: endUser;
  users: endUser[] = [];
  localItem1: string | null;
  localItem2: any;

  constructor(private service: EndUserService) {
    this.localItem1 = localStorage.getItem("users");
    this.localItem2 = localStorage.getItem("user");
    this.user = JSON.parse(this.localItem2)

    if (this.localItem1 == null) { this.users = []; }
    else { this.users = JSON.parse(this.localItem1) }
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.user = new endUser(0, Date.now().toString(), "", "", "", "", "", "");
  }

  ngOnChanges(): void {
    this.localItem2 = localStorage.getItem("user");
    this.user = JSON.parse(this.localItem2)
  }

  public ShowHideDiv() {
    var chkYes = <HTMLInputElement>document.getElementById("chkYes");
    var dvtext = <HTMLInputElement>document.getElementById("dvtext");
    dvtext.style.display = chkYes.checked ? "block" : "none";
  }

  public getAllUsers(): void {
    this.service.getEndUsers().then(x => localStorage.setItem('users', JSON.stringify(x)));
    console.log(this.users);
  }

  public Autocomplete() {
    this.service.getUser(this.user.id).then(x => localStorage.setItem('user', JSON.stringify(x)));
    this.localItem2 = localStorage.getItem("user");
    this.user = JSON.parse(this.localItem2)
  }

  public registerUser(fresherData: NgForm): void {
    this.service.registerEnduser(this.user);
    alert("Form Submitted Succesfully")
    fresherData.reset();
  }
}

