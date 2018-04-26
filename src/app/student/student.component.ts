import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Student } from './Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  private students : Array<Student>;

  ngOnInit() {
    this.studentService.getStudents().subscribe(x => {
      this.students = x;
    })
  }
}
