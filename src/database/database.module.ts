import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_nest_db',
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Sync database schema (disable in production)
    }),
  ],
  exports: [TypeOrmModule], // Export for use in other modules
})
export class DatabaseModule {}
