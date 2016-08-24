import { observable } from 'mobx';

class Recipe {
  @observable name;
  @observable ingredients;
  @observable imageURL;

  constructor(name, ingredients, imageURL) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = imageURL;
  }
}

class RecipeStore {
  @observable recipes = [];
  @observable isEditOpen = false;
  @observable isAddOpen = false;

  toggleEditOpen = () => {
    this.isEditOpen = !this.isEditOpen;
    console.log(this.isEditOpen);
  }

  toggleAddOpen = () => {
    this.isAddOpen = !this.isAddOpen;
  }

  handleAddRecipe = (name, ingredients, imageURL) => {
    const newRecipes = [...this.recipes, new Recipe(name, ingredients, imageURL)];
    this.recipes = newRecipes;
  }
}

const store = window.store = new RecipeStore();

export default store;
