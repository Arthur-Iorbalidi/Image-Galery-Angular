import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { IData, IGetProps, IImg, ImgAPIService, Options } from '../../services/img-api.service';
import { SearchService } from '../../services/search.service';
import { PaginationComponent } from "./components/pagination/pagination.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, ImgListComponent, PaginationComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private imgApiService = inject(ImgAPIService);

  private searchService = inject(SearchService);

  response: IData | null = null;

  currentPage: number = 1;

  isLoading = false;

  ngOnInit() {
    this.searchService.getObservableState().subscribe(options => {
      this.getImgs(options);
      this.currentPage = options.page;
    })

    this.searchService.getObservableIsLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }

  getImgs(props: IGetProps) {
    this.searchService.loading();
    this.imgApiService.get(props).subscribe(value => {
      this.response = value;
      this.searchService.loaded();
    });
  }
}
