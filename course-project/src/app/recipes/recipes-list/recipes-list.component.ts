import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes: Recipe[] = [
    new Recipe({
      name: 'test name',
      description: 'test description',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png'
    }),

    new Recipe({
      name: 'test name',
      description: 'test description',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png'
    }),

    new Recipe({
      name: 'test name',
      description: 'test description',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png'
    })
  ];

  constructor() {
  }

}
