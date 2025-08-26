import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PersonService } from './person/person.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly personService: PersonService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('login guard', this.personService.findAll());
    return false;
  }
}
