export let localStorageService = {
  set: (key: string, value: any) => {
    let dataJSON = JSON.stringify(value);
    localStorage.setItem(key, dataJSON);
  },
  get: (key: string) => {
    let dataJSON = localStorage.getItem(key);
    if (!dataJSON) {
      return null;
    } else {
      return JSON.parse(dataJSON);
    }
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};
