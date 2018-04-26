import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Student } from './Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService,private route : ActivatedRoute) { }

   students : Student[] = [];

  ngOnInit() {
    this.getAllStudents();
  }

  public getAllStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  public deleteStudent(student:Student): void{
    this.studentService.deleteStudent(student).subscribe();
  }

}
