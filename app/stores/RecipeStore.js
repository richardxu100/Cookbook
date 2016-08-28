import { observable } from 'mobx';
import Recipe, { chickenRecipe } from './Recipe';
import userStore from './UserStore';

class RecipeStore {
  @observable recipes = [chickenRecipe];
  @observable isAddOpen = false;

  toggleEditOpen = (id) => {
    console.log('the id is: ', id);
    this.recipes.forEach(recipe => {
      recipe.id === id ?
        this.isCurrentSubmitter(recipe, userStore) :
        recipe
      })
  }

  isCurrentSubmitter = (recipe, userStore) => {
    if (recipe.submitter === userStore.currentUser)
      recipe.isEditOpen = !recipe.isEditOpen;
    else notie.alert('error', "You don't have permission to edit this recipe!", 1.25);
  }

  toggleAddOpen = () => {
    userStore.currentUser ? // if a person is logged in
    this.isAddOpen = !this.isAddOpen :
    notie.alert('info', 'Please login before adding a recipe', 1.5);
  }

  ingredientsToArray = ingredients => ingredients.trim().split(',').map(i => i.trim());
  changeRecipe = (recipe, id, name, ingredients, imageURL) => new Recipe(name, this.ingredientsToArray(ingredients), imageURL, id);

  handleAddRecipe = (name, ingredients, imageURL) => {
    const ingredientsArray = this.ingredientsToArray(ingredients);
    const newImageURL = imageURL !== '' ? imageURL : 'http://blogs.discovermagazine.com/crux/files/2013/08/bowl-of-rice1.jpg';
    const newRecipes = [...this.recipes, new Recipe(name, ingredientsArray, newImageURL, null, userStore.currentUser)];
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
    let selectedRecipe;
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id)
        selectedRecipe = this.recipes[i];
    }
    if (selectedRecipe.submitter === userStore.currentUser) {
      const newRecipes = this.recipes.filter(recipe => recipe.id !== id);
      this.recipes = newRecipes;
    }
    else notie.alert('error', "You do not have permission to delete this recipe!", 1);
  }
}

const recipeStore = window.recipeStore = new RecipeStore();
export default recipeStore;
