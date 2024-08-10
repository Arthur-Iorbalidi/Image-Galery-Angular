import { Component, Input } from '@angular/core';
import { IImg } from '../../../../services/img-api.service';

@Component({
  selector: 'app-img-list',
  standalone: true,
  imports: [],
  templateUrl: './img-list.component.html',
  styleUrl: './img-list.component.scss'
})
export class ImgListComponent {
  @Input() imgs: IImg[] | null = null;
}
