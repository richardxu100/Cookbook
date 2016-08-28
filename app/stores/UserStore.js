import { observable, computed } from 'mobx';

class User {
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

const rich = new User('rich', 'fried', 'richardxu100@gmail.com');

class UserStore {
  @observable users = [rich];
  @observable currentUser;

  correctLogin = (user, email, password) => {
    if (user.email === email && user.password === password) {
      this.currentUser = user;
    }
  }

  canLogin = (email, password) => {
    let count = 0;
    this.users.forEach(user => {
      if (user.email === email && user.password === password)
        count++; // make sure you don't have duplicate users
    })
    if (count === 1) return true;
    else             return false;
  }

  canRegister = (email) => {
    let count = 0;
    this.users.forEach(user => {
      if (user.email === email) count++;
    })
    if (count === 0) return true; // no user already registered
    else             return false;
  }

  handleRegister = (name, email, password) => {
    const newUsers = [...this.users, new User(name, password, email)];
    this.users = newUsers;
  }

  handleLogin = (email, password) => {
    this.users.forEach(user => {
      // this.correctLogin(user, email, password)
      if (user.email === email && user.password === password) {
        this.currentUser = user;
      }
    })
  }

  signOut = () => this.currentUser = undefined;

}

const userStore = window.userStore = new UserStore();
export default userStore;
