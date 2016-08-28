import { observable } from 'mobx';

export default class User {
  @observable name;
  @observable password;
  @observable email;
  id;

  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.id = Date.now();
  }
}

export const rich = new User('rich', 'fried', 'richardxu100@gmail.com');
