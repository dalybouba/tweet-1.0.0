import { LikeEntity } from '../entity/Like.entity';
import { Like } from '../interfaces/like.interface';
declare class LikeService {
    likes: typeof LikeEntity;
    findAllLike(): Promise<Like[]>;
    findLikeById(likeId: number): Promise<Like[]>;
    findLikeByPrams(userId: number, tweetId: number): Promise<Like[]>;
    createLike(likeData: any): Promise<Like>;
}
export default LikeService;
