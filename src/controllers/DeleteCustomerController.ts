import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCustomerService } from "../services/DeleteCustomerService"


class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: String}

        const customerService =  new DeleteCustomerService()

        const customer = await customerService.execute({id})

        reply.send(customer)
    }
}

export{DeleteCustomerController}