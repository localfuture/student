import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiService.insertData(data.value).subscribe((response:any)=>{
      console.log(response);
      alert('Successfully Inserted');
    })
  }


  constructor(private apiService: ApiService) { }


  ngOnInit() {
  }

}
