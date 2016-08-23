import { observable } from 'mobx';

class RecipeStore {
  @observable recipes = [];
  @observable modalEditOpen = false;
}

const store = window.store = new RecipeStore();

export default store;
