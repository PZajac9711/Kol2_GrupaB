import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pz-forum-item',
  templateUrl: './pz-forum-item.component.html',
  styleUrls: ['./pz-forum-item.component.css']
})
export class PzForumItemComponent implements OnInit {
  @Input()
  data: any;

  constructor(private routes: Router) {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.routes.navigateByUrl('/posts/' + this.data?.id);
  }
}
