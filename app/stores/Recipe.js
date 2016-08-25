import { observable } from 'mobx';

export default class Recipe {
  @observable name;
  @observable ingredients;
  @observable imageURL;
  @observable id;
  @observable isEditOpen;

  constructor(name, ingredients, imageURL, id) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = imageURL;
    this.id = id ? id : Date.now();
    this.isEditOpen = false;
  }
}

export const chickenRecipe = new Recipe('chicken', ['chicken', 'bread', 'butter'], 'http://images.media-allrecipes.com/userphotos/250x250/00/64/20/642001.jpg');
