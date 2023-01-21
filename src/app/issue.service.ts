import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Connecting fEnd to bEnd

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  //uri='http://localhost:4000';//Connecting fEnd to bEnd

  //constructor(private http: HttpClient) { }//Connecting fEnd to bEnd

  /*getIssues() {
    return this.http.get(`${this.uri}/issues`);//Connecting fEnd to bEnd
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);//Connecting fEnd to bEnd
  }

  //Connecting fEnd to bEnd
  addIssue(title, responsible, description, severity) {
    const issue = {
      title:title,
      responsible:responsible,
      description:description,
      severity:severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }
  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title:title,
      responsible:responsible,
      description:description,
      severity:severity,
      status:status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }*/
}
