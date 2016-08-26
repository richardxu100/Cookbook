import { observable } from 'mobx';

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

class UserStore {
  @observable users = [];
  @observable loggedIn = false;
  @observable currentUser;

  correctLogin = (user, email, password) => {
    if (user.email === email && user.password === password) {
      this.loggedIn = true;
      this.currentUser = user;
      console.log('Login succes!');
    }
    else console.log("You can't log in kid!");
  }

  handleRegister = (name, email, password) => {
    const newUsers = [...this.users, new User(name, password, email)];
    this.users = newUsers;
  }

  handleLogin = (email, password) => {
    this.users.forEach(user => this.correctLogin(user, email, password))
  }

}

const userStore = window.userStore = new UserStore();
export default userStore;
