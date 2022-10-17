import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  adduser : any = []

  url = " http://localhost:3000/adduser"
  url1 = "http://localhost:3000/addtask"

  constructor(private http :HttpClient) { }

  add(item :any){
    this.http.post(`${this.url}`,item).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
   }

   get(){
    return this.http.get(this.url) 
   }


   addtask(item :{id:number,name:string,Department:string,task:string}){
    this.http.post(`${this.url1}`,item).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
   }

   gettask(){
    return this.http.get(this.url1) 
   }

   
}
