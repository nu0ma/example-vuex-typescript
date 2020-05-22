import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module,
} from 'vuex-module-decorators';
import store from '../index';

export type CounterState = {
  counter: number;
};

@Module({ dynamic: true, store: store, name: 'counter', namespaced: true })
class Counter extends VuexModule implements CounterState {
  counter = 0;

  @Mutation
  private INCREMENT(num: number) {
    this.counter += num;
  }

  @Mutation
  private DECREMENT(num: number) {
    this.counter -= num;
  }

  @Action
  public increment(num: number) {
    this.INCREMENT(num);
  }

  @Action
  public decrement(num: number) {
    this.DECREMENT(num);
  }
}

export const counterModule = getModule(Counter);
