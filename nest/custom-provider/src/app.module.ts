import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'app-service',
      useClass: AppService,
    },
    {
      provide: 'person-service',
      useValue: {
        name: '张三',
        age: 18,
      },
    },
    {
      provide: 'school-service',
      useFactory: () => {
        return {
          name: '清华大学',
        }
      }
    },
    {
      provide: 'info-service',
      useFactory: (personService, schoolService) => {
        return {
          name: personService.name,
          age: personService.age,
          school: schoolService.name,
        }
      },
      inject: ['person-service', 'school-service'],
    }
  ],
})
export class AppModule {}
