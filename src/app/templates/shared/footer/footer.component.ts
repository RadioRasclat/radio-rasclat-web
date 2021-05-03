import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Blog } from '@app/core/models/Blog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  blogPosts: Blog[];
  year: number = new Date().getFullYear();
  isLoading: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getBlogPosts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts;
      });
  }
}
