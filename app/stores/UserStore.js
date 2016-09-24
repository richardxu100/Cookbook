import { observable } from 'mobx';
import User, { rich } from './User';

class UserStore {
  @observable users = [rich];
  @observable currentUser;

  canLogin = (email, password) => {
    return this.users.find(u => u.email === email && u.password === password) ? true : false;
  }

  canRegister = (email) => {
    return this.users.find(user => user.email === email) ? false : true;
  }

  handleRegister = (name, email, password) => {
    const newUsers = [...this.users, new User(name, password, email)];
    this.users = newUsers;
  }

  handleLogin = (email, password) => {
    this.currentUser = this.users.find(u => u.email === email && u.password === password);
  }

  signOut = () => this.currentUser = undefined;

}

const userStore = window.userStore = new UserStore();
export default userStore;
