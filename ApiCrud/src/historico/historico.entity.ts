import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'historico' })
export class HistoricoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  search: string;
}