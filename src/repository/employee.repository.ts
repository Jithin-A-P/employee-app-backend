import { Repository } from 'typeorm'
import Employee from '../entity/employee.entity'

class EmployeeRepository {
  constructor(private employeeRepository: Repository<Employee>) {}

  public findAll = (skip: number, take: number): Promise<Employee[]> => {
    return this.employeeRepository.find({
      skip: skip,
      take: take,
    })
  }

  public findById = (id: number): Promise<Employee> => {
    return this.employeeRepository.findOne({
      where: { id: id },
      relations: {
        address: true,
      },
    })
  }

  public findByEmail = (email: string): Promise<Employee> => {
    return this.employeeRepository.findOne({
      where: { email: email },
      relations: {
        address: true,
      },
    })
  }

  public remove = (employee: Employee): Promise<Employee> => {
    return this.employeeRepository.softRemove(employee)
  }

  public add = (employee: Employee): Promise<Employee> => {
    return this.employeeRepository.save(employee)
  }

  public update = (employee: Employee): Promise<Employee> => {
    return this.employeeRepository.save(employee)
  }
}

export default EmployeeRepository
