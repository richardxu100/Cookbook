import { observable } from 'mobx';
import Recipe, { chickenRecipe } from './Recipe';
import userStore from './UserStore';

class RecipeStore {
  @observable recipes = [chickenRecipe];
  @observable isAddOpen = false;

  toggleEditOpen = (id) => {
    console.log('the id is: ', id);
    // if ()
    // this.recipes.forEach(recipe => recipe.id === id ? recipe.isEditOpen = !recipe.isEditOpen : recipe);
    this.recipes.forEach(recipe => {
      recipe.id === id ?
        this.isCurrentSubmitter(recipe, userStore) :
        recipe
      })
  }

  isCurrentSubmitter = (recipe, userStore) => {
    console.log('Recipe submitter is: ', recipe.submitter);
    console.log('Current User is: ', userStore.currentUser);
    if (recipe.submitter === userStore.currentUser)
      recipe.isEditOpen = !recipe.isEditOpen;
    else console.log("You don't have permission to edit this!");
  }

  toggleAddOpen = () => {
    userStore.currentUser ? // if a person is logged in
    this.isAddOpen = !this.isAddOpen :
    console.log('Please login before adding a recipe!');
  }
  
  ingredientsToArray = ingredients => ingredients.trim().split(',').map(i => i.trim());
  changeRecipe = (recipe, id, name, ingredients, imageURL) => new Recipe(name, this.ingredientsToArray(ingredients), imageURL, id);

  handleAddRecipe = (name, ingredients, imageURL) => {
    const ingredientsArray = this.ingredientsToArray(ingredients);
    const newRecipes = [...this.recipes, new Recipe(name, ingredientsArray, imageURL, null, userStore.currentUser)];
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
    this.toggleEditOpen.bind(this, id); // what does bind(this, id) do that's so special? Maybe because you need to use a parameter?
  }

  handleDeleteRecipe = (id) => {
    const newRecipes = this.recipes.filter(recipe => recipe.id !== id);
    this.recipes = newRecipes;
  }
}

const recipeStore = window.recipeStore = new RecipeStore();
export default recipeStore;
