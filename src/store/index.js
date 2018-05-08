import { observable, action, runInAction } from 'mobx';
import { createHashHistory } from 'history';

class RootStore{
  constructor(){
    this.counter = new Counter(this);
  }
}

class Counter {
    constructor(){
      // this.count = 1;
    }

    @observable count = 1;
    @action.bound
    increment(){
        console.log(this)
        this.count++;
    }

    @action.bound
    decrement(){
        this.count--;
    }
    @action.bound
    incrementIfOdd(){
        if(this.count % 2 == 0){
            this.count++
        }
    }
    @action.bound
    incrementAsync(){
        setTimeout(() => {
            runInAction('async add count',() => {
                this.count++;
            })
        }, 1000);
    }
}

const rootStore = new RootStore();
const history = createHashHistory();

export { rootStore , history };
