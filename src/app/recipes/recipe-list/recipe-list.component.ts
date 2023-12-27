import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg'),
  new Recipe('A Test2 Recipe', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
]}
