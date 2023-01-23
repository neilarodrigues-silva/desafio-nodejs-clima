import * as bcrypt from 'bcrypt';
import { IsEnum } from "class-validator";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../roles/role.enum";

@Entity({ name: 'admins' })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Admin})
  @IsEnum(type => 'enum')
  roles: Role;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }
}