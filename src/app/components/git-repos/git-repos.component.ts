import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
// For Using data provided in the parent component
  @Input() githubRepos: any;
  @Input() page!: number; 
  @Input() itemsPerPage!: number;
  @Input() totalItems : any; 

  
  
  constructor() {}

  ngOnInit(): void {
  }

}
