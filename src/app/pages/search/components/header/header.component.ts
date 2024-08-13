import { Component, inject, Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchService = inject(SearchService);

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
  });

  hundleSubmit() {
    this.searchService.updateState({...this.searchService.getValue(), query: this.searchForm.value.query!})
    this.searchForm.reset();
  }
}
