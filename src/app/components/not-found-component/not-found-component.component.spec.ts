import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponentComponent } from './not-found-component.component';

describe('NotFoundComponentComponent', () => {
  let component: NotFoundComponentComponent;
  let fixture: ComponentFixture<NotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
