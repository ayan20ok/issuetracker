import { Component, OnInit } from '@angular/core';
import { IssueModel } from './issue-model';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-home',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [IssuesService]
})
export class issuesComponent implements OnInit {

  //issues: IssueModel= {issueno:"",desc:"",completed:""};
  issues: any = [];

  constructor(private _issueService: IssuesService){
    
   
  }

  getIssueList(){
    this._issueService.getIssues().subscribe((res:IssueModel)=>{
      this.issues = res;

      //console.log(res)
    },);
  }

  ngOnInit(): void {
    //this.issues = this._issueService.getIssues();
    this.getIssueList();
    console.log("Issue List:" + this.issues);
  }

  pageTitle = "Issue List!"

}
