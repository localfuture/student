import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-view-all-students',
  templateUrl: './view-all-students.component.html',
  styleUrls: ['./view-all-students.component.css']
})
export class ViewAllStudentsComponent implements OnInit {

  private mydata: Array<Object> = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewData().subscribe((response:Array<Object>)=>{
      this.mydata = response;
    })
  }
}
