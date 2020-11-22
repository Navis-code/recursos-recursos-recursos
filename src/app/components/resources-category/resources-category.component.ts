import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '@models/resource-model';
import { ResourceService } from '@services/resource.service';

@Component({
  selector: 'app-resources-category',
  templateUrl: './resources-category.component.html',
  styleUrls: ['./resources-category.component.scss'],
})
export class ResourcesCategoryComponent implements OnInit {
  category: string;
  resourcesInCategory: Resource[];

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.resourcesInCategory = this.resourceService.getResourcesBySingleCategory(
        params
      );
      this.category = params.categoryName;
    });
  }
}
