import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  private mydata: Array<Object> = [];
  private status = false;

  constructor(private apiservice: ApiService) { }

  

  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservice.searchData(data.value).subscribe((response:Array<Object>)=>{
      

      if (response.length> 0) {
        this.mydata = response;
        this.status = true;
      }
    })
  }

  editbutton(){
    this.apiservice.editData(this.mydata[0]).subscribe((Response: any)=>{
      console.log(Response);
      alert('Successfully Inserted');
    })
  }

  deletebutton(){
    this.apiservice.deleteData(this.mydata[0]).subscribe((Response: any)=>{
      console.log(Response);
      alert('Successfully deleted');
    })
  }

  ngOnInit() {
  }

}
