import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorite {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @ManyToOne(() => UserEntity, (user) => user.favoritos)
    user: UserEntity;
}
