import { Category } from '@models/category-model';
import { Resource } from '@models/resource-model';
import { Injectable } from '@angular/core';
import resourcesJSON from '@resources/all.json';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor() {}
  getResources(): Resource[] {
    return resourcesJSON;
  }
  getCategoriesName(): Array<string> {
    /* Map categories and return without duplicated */
    const categoriesRaw = resourcesJSON.map(
      (resource) => resource.categoryName
    );
    const categories = [...new Set(categoriesRaw)];
    return categories;
  }
  getResourcesByCategories(categoriesName: string[]): Array<Category> {
    /* Create array with category and resources of that cateogry */
    const resourcesByCategory: Category[] = [];
    categoriesName.forEach((categoryName) => {
      resourcesByCategory.push({
        categoryName,
        resources: resourcesJSON.filter(
          (resource) => resource.categoryName === categoryName
        ),
      });
    });
    return resourcesByCategory;
  }
  getResourcesBySingleCategory({ categoryName }: Params): Array<Resource> {
    return resourcesJSON.filter((x) => x.categoryName === categoryName);
  }
}
