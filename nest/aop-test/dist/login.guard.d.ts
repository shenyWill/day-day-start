import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PersonService } from './person/person.service';
export declare class LoginGuard implements CanActivate {
    private readonly personService;
    constructor(personService: PersonService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
