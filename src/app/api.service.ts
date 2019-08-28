import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertData(data){
    console.log("Insert");
    console.log(data);
    return this.http.post("http://localhost:3000/AddStudent",data);
  }

  viewData(){
    return this.http.get("http://localhost:3000/viewAllStudents");
  }

  searchData(data){
    return this.http.post("http://localhost:3000/searchStudent",data);
  }

  editData(data){
    return this.http.post("http://localhost:3000/editStudent",data);
  }

  deleteData(data){
    return this.http.post("http://localhost:3000/deleteStudent",data);
  }
}
