import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PzDataService {
  url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getPost() {
    return this.http.get(this.url + '/api/forum/posts');
  }

  getPostById(id) {
    if (id >= 1 && id <= 3) {
      return this.http.get(this.url + '/api/forum/posts/' + id);
    }
  }
}
