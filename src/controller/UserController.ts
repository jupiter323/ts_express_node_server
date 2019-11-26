import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    
    async oneByPhone(request: Request, response: Response, next: NextFunction) {
        var phone = parseInt(request.params.phone,10);
        return this.userRepository.findOne({phone});
    }
    
    async oneByName(request: Request, response: Response, next: NextFunction) {
        var name = request.params.name;
        return this.userRepository.findOne({name});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}