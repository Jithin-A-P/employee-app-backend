import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import Employee from '../entity/employee.entity'
import Address from '../entity/address.entity'

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Employee, Address],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  migrations: ['dist/db/migrations/*.js']
})

export default dataSource