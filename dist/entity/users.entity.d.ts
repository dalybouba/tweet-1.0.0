import { TweetEntity } from './Tweet.entity';
export declare class UserEntity {
    id: number;
    email: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    tweets: TweetEntity[];
}
