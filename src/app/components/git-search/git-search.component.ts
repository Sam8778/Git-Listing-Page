import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  public githubUserQuery!: any;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;
  public page: number = 1;
  public itemsPerPage = 10;
  public totalItems : any; 

  constructor(private gitService: GitService, private ngxSpinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }

  searchUser() {
    // display the spinner
    this.ngxSpinner.show();
    // To fetch the github Profile
    this.gitService.getProfile(this.githubUserQuery).subscribe({
      next: (data) => {this.githubProfile = data},
      error: (error) => {this.errorMessage = error},
    });

    // To fetch the github Repos
    this.gitService.getRepos(this.githubUserQuery).subscribe({
      next: (data) => {this.githubRepos = data, this.totalItems = this.githubProfile.public_repos
       ,
       // hide spinner
       this.ngxSpinner.hide()},
      error: (error) => {this.errorMessage = error},
    });
     
  }
  // Get the Page number
  getPage(page: any ) {
    // display the spinner
    this.ngxSpinner.show();
      this.gitService.getPages(this.githubUserQuery, page).subscribe({
      next: (data) => {this.githubRepos = data, this.totalItems = this.githubProfile.public_repos
      ,  
      // hide spinner
       this.ngxSpinner.hide()},
      error: (error) => {this.errorMessage = error},
    });
  }

  

}

  

