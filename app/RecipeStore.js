import { observable } from 'mobx';

class RecipeStore {
  @observable recipes = [];
  @observable isEditOpen = false;

  toggleEditOpen = () => {
    this.isEditOpen = !this.isEditOpen;
    console.log(this.isEditOpen);
  }
}

const store = window.store = new RecipeStore();

export default store;
