import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedonar',
  templateUrl: './deletedonar.component.html',
  styleUrls: ['./deletedonar.component.css']
})
export class DeletedonarComponent implements OnInit {

  constructor() { }

  donarId=""
  


  readValues=()=>{
    let data={
      "donarid":this.donarId
  
    }
   
console.log(data)

  }

  ngOnInit(): void {
  }

}
