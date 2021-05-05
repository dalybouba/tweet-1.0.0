import { UserEntity } from './users.entity';
import { TweetEntity } from './Tweet.entity';
export declare class LikeEntity {
    id: number;
    createdAt: Date;
    user: UserEntity;
    tweets: TweetEntity;
}
