import { extendObservable, observable, action, runInAction, computed } from 'mobx';
import { createHashHistory } from 'history';

// useStrict(true);
class RootStore {
    constructor() {
        this.counter = new Counter(this);
    }
}

class Counter {
    constructor() {
        extendObservable(this, {
            count: 0,
        });
    }
    @action.bound
    increment() {
        this.count++;
    }
    @action.bound
    decrement() {
        this.count--;
    }
}

const rootStore = new RootStore();
const history = createHashHistory();

export { rootStore , history };
