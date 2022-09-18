import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'

export class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body

        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            throw new BadRequestError("Email já cadastrado")
        }

        const hashPass = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name,
            email,
            password: hashPass
        })

        await userRepository.save(newUser)
        const { password: _, ...user } = newUser
        return res.status(201).json(newUser)
    }

    async getProfile(req: Request, res: Response) {

        return res.json(req.user)
    }

    async getUser(req: Request, res: Response) {

        const user = await userRepository.findOneBy({ id: Number(req.params.id) })

        if (!user) {
            throw new BadRequestError('Usuário não encontrado')
        }
        const { password: _, ...userLogged } = user

        return res.json(userLogged)
    }

    async getAllUsers(req: Request, res: Response) {

        const users = await userRepository.find()
        if (!users) {
            throw new BadRequestError('Usuários não encontrados')
        }

        return res.json(users)
    }


}