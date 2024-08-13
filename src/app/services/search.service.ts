import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGetProps, Options } from './img-api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private state = new BehaviorSubject<IGetProps>({
    option: Options.search,
    query: 'Nature',
    page: 1,
  });

  getObservableState() {
    return this.state.asObservable();
  }

  getValue() {
    return this.state.getValue();
  }

  updateState(newState: IGetProps) {
    this.state.next(newState);
  }
}
