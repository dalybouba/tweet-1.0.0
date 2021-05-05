import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Tweet } from '@interfaces/tweet.interface';
import { UserEntity } from './users.entity';
import { LikeEntity } from './Like.entity';

@Entity()
export class TweetEntity implements Tweet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => UserEntity, user => user.tweets ,{ onDelete: 'CASCADE' })
    user: UserEntity;
    @OneToMany(() => LikeEntity, like => like.tweets)
    likes: LikeEntity[];


  // @OneToOne(type => UserEntity)
  // @JoinColumn()
  // auth: UserEntity;
}
