import { Component, OnInit } from '@angular/core';
import { ResourceService } from '@services/resource.service';
import { Category } from '@models/category-model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-resources-widget',
  templateUrl: './resources-widget.component.html',
  styleUrls: ['./resources-widget.component.scss'],
})
export class ResourcesWidgetComponent implements OnInit {
  categoriesWithResources: Category[];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    // loop: true,
  };

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    const categoriesName: string[] = this.resourceService.getCategoriesName();
    this.categoriesWithResources = this.resourceService.getResourcesByCategories(
      categoriesName
    );
    this.orderCategoriesAlphabetically();
    this.orderResourcesByLastAdded();
  }

  orderCategoriesAlphabetically(): void {
    this.categoriesWithResources.sort((a, b) =>
      a.categoryName.localeCompare(b.categoryName)
    );
  }
  orderResourcesByLastAdded(): void {
    this.categoriesWithResources.forEach((category) => {
      category.resources
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .reverse();
    });
  }
}
