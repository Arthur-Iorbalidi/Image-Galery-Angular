import { Component, Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGetProps, Options } from '../../../../services/img-api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() search!: ((props: IGetProps) => void);

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
  });

  hundleSubmit() {
    this.search({option: Options.search, query: this.searchForm.value.query!})
    this.searchForm.reset();
  }
}
