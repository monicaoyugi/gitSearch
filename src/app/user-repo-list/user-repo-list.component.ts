import {Component, OnInit} from '@angular/core';
import {RepoServiceService} from '../repo-service.service';
import {RepoModel} from '../repo-model';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.css']
})
export class UserRepoListComponent implements OnInit {
  myRepo: RepoModel[];

  constructor(public reposerv: RepoServiceService) {
  }

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo);
    });
  }

  ngOnInit() {
    this.getRepo('monicaoyugi');
  }
}
