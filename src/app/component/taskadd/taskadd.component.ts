import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {
  
  user :any=[];

  constructor(private api:ServiceService) { }

  
  task(item :any){
    this.api.addtask(item) 
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
