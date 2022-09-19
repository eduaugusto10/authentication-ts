import { Request, Response } from "express";
import { operationRepository } from "../repositories/operationRepository";

export class OperationController {
    async store(req: Request, res: Response) {
        const { id } = req.user
        const { date, percentValue, totalMoney } = req.body
        console.log(req.body)
        const operation = operationRepository.create({
            user: { id },
            date,
            percentValue,
            totalMoney
        })

        await operationRepository.save(operation)
        return res.status(200).json(operation)
    }

    async getSumMonths(req:Request, res:Response) {
        const { id } = req.user
        //SELECT sum(totalMoney) as monthValue, date FROM `operation` WHERE userId=4 and date > (now() - INTERVAL 12 month) group BY MONTH(date);
        const operations = await operationRepository.find
    }
}