import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    onModuleInit() {
        this.$connect()
        .then(() => console.log('successfully connected to db '))
        .catch((error) => console.log('failed to connect to db'+ error))
    }

}
