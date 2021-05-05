import LikeService from '../services/like.service';
declare class LikeController {
    likeService: LikeService;
    getLikes: (req: any, res: any, next: any) => Promise<void>;
    getLikesById: (req: any, res: any, next: any) => Promise<void>;
    createLike: (req: any, res: any, next: any) => Promise<void>;
}
export default LikeController;
