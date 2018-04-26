import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';
import { HomeComponent } from '../home/home.component';
import { CreateStudentComponent } from '../student/create-student/create-student.component';


const routes : Routes = [
  {path: 'students', component: StudentComponent},
  {path : 'teachers', component: TeacherComponent},
  {path : ' ', component: HomeComponent},
  {path : 'students/create', component: CreateStudentComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
})



export class AppRoutingModule { }
