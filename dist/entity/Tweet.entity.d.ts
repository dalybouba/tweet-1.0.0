import { Tweet } from '../interfaces/tweet.interface';
import { UserEntity } from './users.entity';
import { LikeEntity } from './Like.entity';
export declare class TweetEntity implements Tweet {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
    likes: LikeEntity[];
}
