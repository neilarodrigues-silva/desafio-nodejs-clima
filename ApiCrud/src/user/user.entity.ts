import { Role } from './../roles/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { hashSync } from 'bcrypt';
import { IsEnum } from 'class-validator';
import { Favorite } from 'src/favorite/entities/favorite.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  city: string;

  @Column()
  state: string;
  
  @OneToMany(() => Favorite, (favorite) => favorite.user, { eager: true })
  favoritos: Favorite[]

  @Column({ type: 'enum', enum: Role, default: Role.User})
  @IsEnum(type => 'enum')
  roles: Role;

  @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10);
    }
}