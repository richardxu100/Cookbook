import { observable } from 'mobx';

class Recipe {
  @observable name;
  @observable ingredients;
  @observable imageURL;
  @observable id;

  constructor(name, ingredients, imageURL) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = imageURL;
    this.id = Date.now();
  }
}
const chickenRecipe = new Recipe('chicken', ['chicken', 'bread', 'butter'], 'http://images.media-allrecipes.com/userphotos/250x250/00/64/20/642001.jpg');

class RecipeStore {
  @observable recipes = [chickenRecipe];
  @observable isEditOpen = false;
  @observable isAddOpen = false;

  toggleEditOpen = () => this.isEditOpen = !this.isEditOpen;
  toggleAddOpen = () => this.isAddOpen = !this.isAddOpen;

  handleAddRecipe = (name, ingredients, imageURL) => {
    const ingredientsArray = ingredients.trim().split(',').map(i => i.trim());
    const newRecipes = [...this.recipes, new Recipe(name, ingredientsArray, imageURL)];
    this.recipes = newRecipes;
    this.toggleAddOpen();
  }

  handleEditRecipe = (id, name, ingredients, imageURL) => {

    this.toggleEditOpen();
  }

  handleDeleteRecipe = (id) => {
    const newRecipes = this.recipes.filter(recipe => recipe.id !== id);
    this.recipes = newRecipes;
  }

}

const store = window.store = new RecipeStore();

export default store;
