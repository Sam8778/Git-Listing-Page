import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
// For using data provided in the parent
  @Input() githubProfile: any;
  constructor() { }

  ngOnInit(): void {
  }

}
