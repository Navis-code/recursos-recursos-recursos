import { Component, OnInit } from '@angular/core';
import { Resource } from '@models/resource-model';
import { ResourceService } from '@services/resource.service';

@Component({
  selector: 'app-resources-widget',
  templateUrl: './resources-widget.component.html',
  styleUrls: ['./resources-widget.component.scss'],
})
export class ResourcesWidgetComponent implements OnInit {
  resources: Resource[];
  categoriesName: string[];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resources = this.resourceService.getResources();
    this.categoriesName = this.resourceService.getCategoriesName();
    console.log(
      this.resourceService.getResourcesByCategories(this.categoriesName)
    );
  }
}
