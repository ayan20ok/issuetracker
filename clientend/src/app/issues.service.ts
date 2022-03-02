import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IssueModel } from './issue-model';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  baseurl:string = "http://localhost:3000/";

  isslisturl: string = this.baseurl + "issuelist";
  addissueurl: string = this.baseurl + "addIssue?";

  constructor(private http:HttpClient) { 


  }

  addIssue(iDetail:any){

    //let params = new HttpParams().set('isno', '10');
    // Begin assigning parameters
    // params = params.append('isno', iDetail.issueno);
    // params = params.append('desc', iDetail.desc);
    // params = params.append('comp', iDetail.completed);
      const isn:string = iDetail.issueno
      const desc:string = iDetail.desc
      const comp:string = iDetail.completed

    
    console.log(iDetail.issueno);
    return this.http.get('http://localhost:3000/addIssue?'+'isn='+isn+'&desc='+desc+'&comp='+comp);
  }

  getIssues():   Observable<IssueModel>
  {
    

    return this.http.get<IssueModel>(this.isslisturl);
    
   // return this.http.get(newurl)
    // return [
    //   {
    //     issueno: 1,
    //     desc: 'Level 1',
    //     completed: 'Yes',
    //   },
    //   {
    //     issueno: 2,
    //     desc: 'Level 2',
    //     completed: 'No',
    //   },
    //   {
    //     issueno: 3,
    //     desc: 'Level 3',
    //     completed: 'yes',
    //   },
    //   {
    //     issueno: 4,
    //     desc: 'Level 1',
    //     completed: 'yes',
    //   },
    //   {
    //     issueno: 5,
    //     desc: 'Level 3',
    //     completed: 'No',
    //   }

    // ]


  }

  }

  

