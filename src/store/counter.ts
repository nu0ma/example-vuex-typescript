import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module,
} from 'vuex-module-decorators';
import store from './index';

export type ICounterState = {
  counter: number;
};

@Module({ dynamic: true, store: store, name: 'counter', namespaced: true })
class Counter extends VuexModule implements ICounterState {
  counter = 0;

  @Mutation
  increment(num: number) {
    this.counter += num;
  }

  @Mutation
  decrement(num: number) {
    this.counter -= num;
  }

  @Action
  incr() {
    this.increment(1);
  }

  @Action
  decr() {
    this.decrement(1);
  }
}

export const counterModule = getModule(Counter);
