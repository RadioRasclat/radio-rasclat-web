import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import { Blog } from '@app/core/models/Blog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
})
export class BlogSingleComponent implements OnInit {
  blogPost: Blog;
  title: any;
  hex: any;
  rgba: any;
  isLoading = false;
  id: any;
  message: string;
  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private toastService: ToastrService
  ) {}

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle('Radio Rasclat — ' + title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.id = params.id;
      if (this.id) {
        this.apiService
          .getBlogPost({ blogPostId: this.id })
          .pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe((blogPost) => {
            if (blogPost && blogPost.status !== 404) {
              this.blogPost = blogPost;
              this.setTitle({ title: this.blogPost.title });
              Vibrant.from(
                'https://cors-proxy.radio-rasclat.com/' + this.blogPost.image
              )
                .getPalette()
                .then((palette) => {
                  this.hex = palette.Vibrant.hex;
                  this.rgba =
                    'rgba(' +
                    palette.Vibrant.r +
                    ',' +
                    palette.Vibrant.g +
                    ',' +
                    palette.Vibrant.b +
                    ',0.15)';
                });
            } else {
              this.toastService.info(blogPost.message, blogPost.status, {
                closeButton: true,
              });
            }
          });
      }
    });
  }
}
