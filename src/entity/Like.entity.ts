import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Tweet } from '@interfaces/tweet.interface';
import { UserEntity } from './users.entity';
import { TweetEntity } from './Tweet.entity';

@Entity()
export class LikeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
  @ManyToOne(type => LikeEntity, like => like.user)
    user: UserEntity;
  @ManyToOne(type => LikeEntity, like => like.tweets)
    tweets: TweetEntity;
  // @OneToOne(type => UserEntity)
  // @JoinColumn()
  // auth: UserEntity;
}
