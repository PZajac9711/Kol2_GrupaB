import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PzDataService} from '../../services/pz-data.service';

@Component({
  selector: 'app-pz-forum-details',
  templateUrl: './pz-forum-details.component.html',
  styleUrls: ['./pz-forum-details.component.css']
})
export class PzForumDetailsComponent implements OnInit {
  id;
  single$: any;

  constructor(private routes: ActivatedRoute, private httpData: PzDataService) {
  }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.more(this.id);
  }

  more(id) {
    this.httpData.getPostById(id).subscribe(response => {
      console.log(response);
      this.single$ = response;
    });
  }
}
