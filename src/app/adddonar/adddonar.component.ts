import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonar',
  templateUrl: './adddonar.component.html',
  styleUrls: ['./adddonar.component.css']
})
export class AdddonarComponent implements OnInit {

  constructor() { }

name=""
bloodgroup=""
dob=""
lastdonation=""
previousdonation=""
Previousvaccination=""
address=""
pincode=""
mobilenumber=""
emailid=""


readValues=()=>{
  let data={
    "name":this.name,
"bloodgroup":this.bloodgroup,
"dob":this.dob,
"lastdonation":this.lastdonation,
"previousdonation":this.previousdonation,
"Previousvaccination":this.Previousvaccination,
"address":this.address,
"pincode":this.pincode,
"mobilenumber":this.mobilenumber,
"emailid":this.emailid

  }
  console.log(data)
}
  ngOnInit(): void {
  }

}
