import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){
        
    }

    generateUser(userData:Prisma.UserCreateInput){
        return this.prisma.user.create({data:userData});
    }

}
