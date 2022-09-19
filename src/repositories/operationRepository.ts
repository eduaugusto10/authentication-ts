import { AppDataSource } from "../data-source";
import { OperationEntity } from "../entities/OperationEntity";

export const  operationRepository = AppDataSource.getRepository(OperationEntity)