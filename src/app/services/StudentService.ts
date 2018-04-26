import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Student } from "../student/Student";

@Injectable()
export class StudentService {
    constructor(private http:HttpClient) {}
    private url : string = 'http://localhost:8080/hello/api/students';
    private header : any = { 'Content-Type' : 'application/json' }
    public getStudents() : Observable<Array<Student>> {
        return this.http.get<Array<Student>>(this.url, {headers: this.header});
    }
}