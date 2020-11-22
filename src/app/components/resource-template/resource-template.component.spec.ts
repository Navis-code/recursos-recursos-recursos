import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTemplateComponent } from './resource-template.component';

describe('ResourceTemplateComponent', () => {
  let component: ResourceTemplateComponent;
  let fixture: ComponentFixture<ResourceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
