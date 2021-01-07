import { CategoriesWihoutScreenshot } from './../../enums/categoriesWithoutScreenshots.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '@models/resource-model';

@Component({
  selector: 'app-resource-template',
  templateUrl: './resource-template.component.html',
  styleUrls: ['./resource-template.component.scss'],
})
export class ResourceTemplateComponent implements OnInit {
  @Input() resource: Resource;
  imagePath: string;
  defaultImg = '/assets/default/default.webp';

  ngOnInit(): void {
    this.imagePath = this.getImagePath(this.resource.categoryName);
  }

  getImagePath(resourceCategory: string): string {
    if (this.resource.categoryName in CategoriesWihoutScreenshot) {
      return `/assets/default/${resourceCategory}-default.webp`;
    }
    return `/assets/screenshots/${this.resource.name}.webp`;
  }
}
