import { Component, inject, Input } from '@angular/core';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;

  @Input() totalPages: number = 1;

  searchService = inject(SearchService);

  left() {
    this.searchService.updateState({...this.searchService.getValue(), page: this.searchService.getValue().page - 1});
    this.scrollToTop();
  }

  right() {
    this.searchService.updateState({...this.searchService.getValue(), page: this.searchService.getValue().page + 1});
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
