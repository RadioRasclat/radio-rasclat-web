import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  languages: any;
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService
      .getLanguages()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((languages) => {
        console.log(languages);
        this.languages = languages;
      });
  }
}
