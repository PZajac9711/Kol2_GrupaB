import {Component, OnInit} from '@angular/core';
import {PzDataService} from '../../services/pz-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pz-forum',
  templateUrl: './pz-forum.component.html',
  styleUrls: ['./pz-forum.component.css']
})
export class PzForumComponent implements OnInit {
  data$: any;
  single$: any;

  constructor(private dataService: PzDataService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getPost().subscribe(response => {
      this.data$ = response;
    });
  }

  more(id) {
    this.dataService.getPostById(id).subscribe(response => {
      this.single$ = response;
    });
  }
}
