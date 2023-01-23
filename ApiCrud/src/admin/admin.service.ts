import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { CreateAdminDto } from './dto/create.admin.dto';
import { UpdateAdminDto } from './dto/update.admin.dto';

Injectable();
export class AdminService {
  constructor(
    @Inject('ADMIN_REPOSITORY')
    private adminRepository: Repository<AdminEntity>,
  ) {}

  async create(CreateAdminDto: CreateAdminDto) {
    return this.adminRepository.save(CreateAdminDto);
  }
  async findAll(): Promise<AdminEntity[]> {
    const admin = await this.adminRepository.find();
    return admin;
  }

  async saveAdmin(admin: any): Promise<AdminEntity> {
    return this.adminRepository.save(admin);
  }

  async findOne(id: any): Promise<AdminEntity | null> {
    try {
      return await this.adminRepository.findOneBy({ id });
    } catch (error) {
      return null
    }
    
  }

  async findEmailOrFail(email: string) {
    const user = await this.adminRepository.findOneBy({ email });
    if (user == null) return null;
    return user;
  }

  async update(
    id: number,
    newValue: UpdateAdminDto,
  ): Promise<AdminEntity | null> {
    try {
      await this.adminRepository.update(id, newValue);
      return await this.findOne(id);
    } catch (error) {
      return null
    }
    
  }

  async remove(id: string): Promise<void> {
    await this.adminRepository.delete(id);
  }

  async emailAlreadyExists(paramEmail: string) {
    const chosenAdmin = await this.adminRepository.count({
      where: { email: paramEmail },
    });
    console.log('chosenAdmin: ' + chosenAdmin);
    return chosenAdmin > 0;
  }
}
