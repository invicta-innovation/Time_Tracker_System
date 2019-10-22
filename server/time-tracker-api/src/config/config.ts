import { TypeOrmModule } from '@nestjs/typeorm';

const config= TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'manager',
  schema: 'time_tracker',
  database: 'time_tracker_system',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
})
export default config;