import { TypeOrmModule } from '@nestjs/typeorm';

const config= TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  schema: 'manageCompany',
  database: 'company',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
})
export default config;