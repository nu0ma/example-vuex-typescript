import Vue from 'vue';
import Vuex from 'vuex';

import { CounterState } from './modules/counter';
import { ApiResponse } from './modules/employee';

Vue.use(Vuex);

export type RootState = {
  counter: CounterState;
  employees: ApiResponse;
};

export default new Vuex.Store<RootState>({});
