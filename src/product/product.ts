// src/product/product.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome_do_produto: string;

  @Column({ length: 255 })
  fornecedor: string;

  @Column({ length: 255 })
  endereco_fornecedor: string;

  @Column('int')
  quantidade: number;

  @Column('text', { nullable: true })
  descricao: string;

  // Remova a configuração de precision e use CURRENT_TIMESTAMP diretamente
  @CreateDateColumn({
    name: 'data_registro',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  data_registro: Date;

  @UpdateDateColumn({
    name: 'data_update',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  data_update: Date;
}