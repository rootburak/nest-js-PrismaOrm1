import {IsString,IsNotEmpty,IsOptional} from "class-validator"
export class GenerateUser{

    @IsString()
    name:string;

    @IsString()
    @IsOptional()
    displayName?:string;
}