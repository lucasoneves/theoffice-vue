type EmployeeType = {
  name: string,
  role: string,
  email: string,
  id: string,
  status: number,
  avatar: string,
  goal: {
    target: number,
    current: number,
  }
}

export default EmployeeType