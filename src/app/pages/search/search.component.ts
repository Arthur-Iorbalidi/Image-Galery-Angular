import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { IGetProps, IImg, ImgAPIService, Options } from '../../services/img-api.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, ImgListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private imgApiService = inject(ImgAPIService);

  private search = inject(SearchService);

  imgs: IImg[] = [];

  ngOnInit() {
    this.search.getObservableState().subscribe(options => {
      this.getImgs(options);
    })
  }

  getImgs(props: IGetProps) {
    this.imgApiService.get(props).subscribe(value => this.imgs = value.results);
  }
}
