import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities/UserEntity";

export const userRepository = AppDataSource.getRepository(UserEntity)
