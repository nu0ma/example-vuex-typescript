// http://dummy.restapiexample.com/api/v1/employees

import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import store from '..';
import axios from 'axios';

export type EmployeeState = {
  id: string;
  employeeName: string;
  employeeSalary: string;
  employeeAge: string;
  profileImage: string;
};

export type ApiResponse = {
  status: string;
  data: Employee[];
};

@Module({ dynamic: true, store: store, name: 'counter', namespaced: true })
class Employee extends VuexModule implements ApiResponse {
  status!: string;
  data!: Employee[];

  @Mutation
  private SET_EMPLOYEE(res: Employee[]) {
    this.data = res;
  }

  @Action
  public async setEmployee() {
    const res = await axios.get(
      'http://dummy.restapiexample.com/api/v1/employees'
    );
    console.log(res);
    // Mutationをコミット
    this.SET_EMPLOYEE(res.data);
  }
}

export const employeeModule = getModule(Employee);
