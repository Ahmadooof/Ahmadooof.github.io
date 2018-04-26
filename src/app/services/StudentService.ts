import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Student } from "../student/Student";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable()
export class StudentService {
    constructor(private http:HttpClient) {}
    private url : string = 'http://localhost:8080/hello/api/students';

    public getStudents() : Observable<Array<Student>> {
        return this.http.get<Array<Student>>(this.url);
    }

    public CreateStudent(student : Student): Observable<Student> {
        console.log(student.city);
        return this.http.post<Student>(this.url,student,httpOptions);
    }
}