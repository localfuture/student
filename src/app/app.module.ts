import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { SearchStudentsComponent } from './search-students/search-students.component';

const appRoutes: Routes = [
  {path:'',component: AddStudentComponent},
  {path:'view',component: ViewAllStudentsComponent},
  {path:'search',component: SearchStudentsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStudentComponent,
    ViewAllStudentsComponent,
    SearchStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
