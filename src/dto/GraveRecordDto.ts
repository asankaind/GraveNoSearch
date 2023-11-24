import { Expose } from 'class-transformer';
export default class RoleDto {
  @Expose({ name: 'firstburiedDOB' })
  firstburiedDOB!: Date | undefined;
  @Expose({ name: 'firstburiedDOD' })
  firstburiedDOD!: Date | undefined;
  @Expose({ name: 'firstburiedFirstName' })
  firstburiedFirstName!:string;
  @Expose({ name: 'firstburiedLastName' })
  firstburiedLastName!:string;
  @Expose({ name: 'firstburiedMiddleName' })
  firstburiedMiddleName!:string;
  @Expose({ name: 'gravId' })
  gravId!:number;
  @Expose({ name: 'gravPlassKommuneNumber' })
  gravPlassKommuneNumber!:string;
  @Expose({ name: 'graveplace' })
  graveplace!:string;
  @Expose({ name: 'lastburiedDOB' })
  lastburiedDOB!: Date | undefined;
  @Expose({ name: 'lastburiedDOD' })
  lastburiedDOD!: Date | undefined;
  @Expose({ name: 'lastburiedFirstName' })
  lastburiedFirstName!:string;
  @Expose({ name: 'lastburiedMiddleName' })
  lastburiedMiddleName!:string;
  @Expose({ name: 'lastburiedlastName' })
  lastburiedlastName!:string;
}