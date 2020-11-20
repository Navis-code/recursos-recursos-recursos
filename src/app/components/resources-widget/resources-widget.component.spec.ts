import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesWidgetComponent } from './resources-widget.component';

describe('ResourcesWidgetComponent', () => {
  let component: ResourcesWidgetComponent;
  let fixture: ComponentFixture<ResourcesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
