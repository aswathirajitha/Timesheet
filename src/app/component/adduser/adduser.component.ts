import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user :any=[];

  constructor(private api:ServiceService) { }

  adddetails={
    id:"",
    name:"",
    Department:""
  }
  add(){
    this.api.add(this.adddetails) 
    this.get() 
  }

  get()
  {
    this.api.get().subscribe
    (
      res=>this.user=res  
    ) 

  }

  ngOnInit(): void {
    this.get()
  }

}
