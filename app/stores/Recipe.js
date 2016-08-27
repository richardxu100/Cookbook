import { observable } from 'mobx';

export default class Recipe {
  @observable name;
  @observable ingredients;
  @observable imageURL;
  @observable id;
  @observable isEditOpen;
  @observable submitter; // should this be observable?

  constructor(name, ingredients, imageURL, id, submitter) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = imageURL;
    this.id = id ? id : Date.now();
    this.isEditOpen = false;
    this.submitter = submitter;
  }
}

export const chickenRecipe =
new Recipe(
  'Chicken',
  ['chicken', 'bread', 'butter'],
  'http://images.media-allrecipes.com/userphotos/250x250/00/64/20/642001.jpg',
  null,
  {name: 'Rich'}
);
