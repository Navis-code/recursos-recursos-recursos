import { Component, OnInit } from '@angular/core';
import { ResourceService } from '@services/resource.service';
import { Category } from '@models/category-model';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources-widget',
  templateUrl: './resources-widget.component.html',
  styleUrls: ['./resources-widget.component.scss'],
})
export class ResourcesWidgetComponent implements OnInit {
  categoriesWithResources: Category[];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 5,
  };

  constructor(
    private resourceService: ResourceService,
    public router: Router
  ) {}

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
  click(category: string): void {
    this.router.navigate([`category/${category}`]);
  }
}
