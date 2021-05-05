import { UserEntity } from "../entity/users.entity";
export interface Tweet {
    id: number;
    content: string;
    updatedAt: Date;
    createdAt: Date;
    user: UserEntity;
}
