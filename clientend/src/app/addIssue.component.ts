import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';

@Component({
    selector: 'add-issue',
    templateUrl: 'addissue.component.html',
    providers: [IssuesService]
})

export class addissue implements OnInit {

    
   
    constructor(private _issueService: IssuesService){
    
   
    }

    ngOnInit() { }

    onSubmit(value:any) {
        console.log("issueFrom" + value.issueno + value.desc + value.completed);
        //const det = "isn=" + value.issueno + "&desc=" + value.desc + "&comp=" + value.completed;

        this._issueService.addIssue(value).subscribe(err=>{
            console.log(err)
        })
      }
}