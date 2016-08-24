import { observable } from 'mobx';

class Recipe {
  @observable name;
  @observable ingredients;
  @observable imageURL;
  @observable id;

  constructor(name, ingredients, imageURL, id) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = imageURL;
    this.id = id ? id : Date.now();
  }
}
const chickenRecipe = new Recipe('chicken', ['chicken', 'bread', 'butter'], 'http://images.media-allrecipes.com/userphotos/250x250/00/64/20/642001.jpg');

class RecipeStore {
  @observable recipes = [chickenRecipe];
  @observable isEditOpen = false;
  @observable isAddOpen = false;

  toggleEditOpen = () => this.isEditOpen = !this.isEditOpen;
  toggleAddOpen = () => this.isAddOpen = !this.isAddOpen;
  ingredientsToArray = ingredients => ingredients.trim().split(',').map(i => i.trim());
  changeRecipe = (recipe, id, name, ingredients, imageURL) => {
    if (recipe.id === id)
      return new Recipe(name, this.ingredientsToArray(ingredients), imageURL, id);
  }

  handleAddRecipe = (name, ingredients, imageURL) => {
    // const ingredientsArray = ingredients.trim().split(',').map(i => i.trim());
    const ingredientsArray = this.ingredientsToArray(ingredients);
    const newRecipes = [...this.recipes, new Recipe(name, ingredientsArray, imageURL)];
    this.recipes = newRecipes;
    this.toggleAddOpen();
  }

  handleEditRecipe = (id, name, ingredients, imageURL) => {
    console.log('id is: ', id);
    const newRecipes = this.recipes.map(recipe => this.changeRecipe(recipe, id, name, ingredients, imageURL))
    this.recipes = newRecipes;
    console.log('new recipes: ', newRecipes);
    this.toggleEditOpen();
  }

  handleDeleteRecipe = (id) => {
    const newRecipes = this.recipes.filter(recipe => recipe.id !== id);
    this.recipes = newRecipes;
  }

}

const store = window.store = new RecipeStore();
export default store;
