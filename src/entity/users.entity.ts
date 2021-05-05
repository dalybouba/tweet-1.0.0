import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from '@interfaces/users.interface';
import { TweetEntity } from './Tweet.entity';

@Entity()
@Unique(['email'])
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  email: string;
  @Column()

  @IsNotEmpty()
  userName: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => TweetEntity, tweet => tweet.user ,{ onDelete: 'CASCADE' } )
  tweets: TweetEntity[];
}
