import {observable, action} from "mobx";

class counterStore {
  @observable timer;
  constructor(seconds = 0) {
    this.timer = seconds;
    this.start();
  }

  @action resetTimer() {
    this.timer = 0;
  }

  @action incrementTimer () {
    this.timer += 1;
  }

  start () {
    setInterval(() => {
      this.incrementTimer();
    }, 1000);
  }
}

const store = new counterStore(10);
export default store;