class AppStorage {

  static getItem(item, defaultValue = false) {
    if (localStorage.getItem(item)) {
      return localStorage.getItem(item);
    } else if (sessionStorage.getItem(item)) {
      return sessionStorage.getItem(item);
    } else {
      return defaultValue;
    }
  }
}

export default AppStorage;