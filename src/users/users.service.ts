import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateUser } from './dtos/generateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){
        
    }

    generateUser(userData:Prisma.UserCreateInput){
        return this.prisma.user.create({data:userData});
    }
    getAllUsers(){
       return this.prisma.user.findMany()
    }
    async getUserById(userId: number){
        const user = await this.prisma.user.findUnique({
            where: { id: userId }, // userId burada number türünde olmalı
        });
    
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
    
        return user;
    }

}
