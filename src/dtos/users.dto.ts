import { IsEmail, IsIdentityCard, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()

  public email: string;

  @IsString()

  public userName: string;

  @IsString()
  public password: string;

  // @IsString()
  // public id:string;
}
