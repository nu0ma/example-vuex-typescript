import Vue from 'vue';
import Vuex from 'vuex';

import { ICounterState } from './modules/counter';

Vue.use(Vuex);

export type RootState = {
  counter: ICounterState;
};

export default new Vuex.Store<RootState>({});
