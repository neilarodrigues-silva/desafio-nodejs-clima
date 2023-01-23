import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>,
    ) { }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
      }
    async findAll(): Promise<UserEntity[]> {
        const user = await this.userRepository.find();
        return user
    }

    async findOne(id: any): Promise<UserEntity | null> {
        try {
            return await this.userRepository.findOneBy({ id });
        } catch (error) {
            return null
        }
        
    }

    async findEmailOrFail(email: string) {
        const user = await this.userRepository.findOneBy({ email })
        if (user == null) return null
        return user
    }

    async update(id: any, newValue): Promise<UserEntity | null> {

        try {
            await this.userRepository.update(id, newValue);
            return await this.findOne(id);
        } catch (error) {
            return null
        }
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async emailAlreadyExists(paramEmail: string) {
        const chosenUser = await this.userRepository.count({
            where: {email:paramEmail}
        })
        return chosenUser > 0;
    }
}