import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonar',
  templateUrl: './searchdonar.component.html',
  styleUrls: ['./searchdonar.component.css']
})
export class SearchdonarComponent implements OnInit {

  constructor() { }

  donarname=""
  bloodgroup=""


  readValues=()=>{
    let data={
    "donarname":this.donarname,
  "bloodgroup":this.bloodgroup
  }
console.log(data)

  }
  ngOnInit(): void {
  }

}
