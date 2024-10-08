import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgListComponent } from './img-list.component';

describe('ImgListComponent', () => {
  let component: ImgListComponent;
  let fixture: ComponentFixture<ImgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
