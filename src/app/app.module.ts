import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { fromEventPattern } from 'rxjs';

const appRoutes: Routes = [
  {path:'',component: AddStudentComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStudentComponent
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
