import { UserEntity } from "../entities/UserEntity";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<UserEntity>
        }
    }
}