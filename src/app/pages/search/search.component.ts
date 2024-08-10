import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { IData, IGetProps, IImg, ImgAPIService, Options } from '../../services/img-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, ImgListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private imgApiService = inject(ImgAPIService);
  imgs: IImg[] | null = null;

  constructor() {
    this.getImgs({option: Options.search, query: 'Nature'});
  }

  getImgs(props: IGetProps) {
    this.imgApiService.get(props).subscribe(value => this.imgs = value.results);
  }
}
