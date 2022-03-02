import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { issueDetails } from './issueDetails';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { issuesComponent } from './issues.component ';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { addissue } from './addIssue.component';

@NgModule({
  declarations: [
    AppComponent, issueDetails, HomeComponent, issuesComponent,addissue
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([

      {path:'home', component:HomeComponent},
      {path:'issues', component:issuesComponent},
      {path:'addissue', component:addissue},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', redirectTo:'home', pathMatch:'full'},
    ]),HttpClientModule, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
