import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCategoryComponent } from './resources-category.component';

describe('ResourcesCategoryComponent', () => {
  let component: ResourcesCategoryComponent;
  let fixture: ComponentFixture<ResourcesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
