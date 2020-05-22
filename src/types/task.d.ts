export type Employee = {
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
