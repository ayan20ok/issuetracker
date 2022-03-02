import { Component, Input } from '@angular/core';
import { IssueModel } from './issue-model';

@Component({
  selector: 'issue-details',
  templateUrl: './issueDetails.html',
  styleUrls: ['./issueDetails.css']
})
export class issueDetails {
  desc:string = 'List of all types of issues ae available here.';
  @Input() totalIssue: any[] = [];
  

  //  tIssue: any[]= [
  //   {
  //     issueNo:'1',
  //     desc: 'Level 1',
  //     complete: 'Yes',
  //   },
  //   {
  //     issueNo:'2',
  //     desc: 'Level 2',
  //     complete: 'No',
  //   },
  
  // ]
}