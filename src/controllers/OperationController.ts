import { Request, Response } from "express";
import { operationRepository } from "../repositories/operationRepository";

export class OperationController {
    async store(req: Request, res: Response) {
        const { id } = req.user
        const { date, percentValue, totalMoney } = req.body
        const operation = operationRepository.create({
            user: { id },
            date,
            percentValue,
            totalMoney
        })

        await operationRepository.save(operation)
        return res.status(200).json(operation)
    }

    async getSumMonths(req: Request, res: Response) {
        const { id } = req.user

        const operations = await operationRepository
            .createQueryBuilder()
            .select("sum(totalMoney)", "monthValue")
            .addSelect("Month(date)", "month")
            .addSelect("Year(date)", "year")
            .where("userId = :id", { id })
            .andWhere("date > (now() - INTERVAL 12 month)")
            .groupBy("MONTH(date)")
            .orderBy("date", "ASC")
            .getRawMany()

        for (let index = 0; index < operations.length; index++) {
            operations[index]["period"] = (`${operations[index].month.toString()}/${operations[index].year.toString()}`)
        }

        return res.json(operations)
    }
    async getSumMonthsById(req: Request, res: Response) {
        const { id } = req.params

        const operations = await operationRepository
            .createQueryBuilder()
            .select("sum(totalMoney)", "monthValue")
            .addSelect("Month(date)", "month")
            .addSelect("Year(date)", "year")
            .where("userId = :id", { id })
            .andWhere("date > (now() - INTERVAL 12 month)")
            .groupBy("MONTH(date)")
            .orderBy("date", "ASC")
            .getRawMany()

        for (let index = 0; index < operations.length; index++) {
            operations[index]["period"] = (`${operations[index].month.toString()}/${operations[index].year.toString()}`)
        }

        return res.json(operations)
    }
}