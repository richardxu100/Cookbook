import { observable } from 'mobx';
import Recipe, { chickenRecipe } from './stores/Recipe';

class RecipeStore {
  @observable recipes = [chickenRecipe];
  @observable isAddOpen = false;

  toggleEditOpen = (id) => {
    console.log('the id is: ', id);
    this.recipes.forEach(recipe => recipe.id === id ? recipe.isEditOpen = !recipe.isEditOpen : recipe);
  }

  toggleAddOpen = () => this.isAddOpen = !this.isAddOpen;
  ingredientsToArray = ingredients => ingredients.trim().split(',').map(i => i.trim());
  changeRecipe = (recipe, id, name, ingredients, imageURL) => new Recipe(name, this.ingredientsToArray(ingredients), imageURL, id);

  handleAddRecipe = (name, ingredients, imageURL) => {
    const ingredientsArray = this.ingredientsToArray(ingredients);
    const newRecipes = [...this.recipes, new Recipe(name, ingredientsArray, imageURL)];
    this.recipes = newRecipes;
    this.toggleAddOpen();
  }

  handleEditRecipe = (id, name, ingredients, imageURL) => {
    const newRecipes = this.recipes.map(recipe =>
      recipe.id === id ?
      this.changeRecipe(recipe, id, name, ingredients, imageURL) : recipe
    )
    this.recipes = newRecipes;
    console.log('id in handleEditRecipe: ', id);
    this.toggleEditOpen.bind(this, id); // what does bind(this, id) do that's so special?
  }

  handleDeleteRecipe = (id) => {
    console.log('delete id: ', id);
    const newRecipes = this.recipes.filter(recipe => recipe.id !== id);
    this.recipes = newRecipes;
  }
}

const store = window.store = new RecipeStore();
export default store;
