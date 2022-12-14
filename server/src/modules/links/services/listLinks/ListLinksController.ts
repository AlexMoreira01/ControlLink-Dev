import { Request, Response } from "express";

import { container } from "tsyringe";

import { ListLinksService  } from "./ListLinksService";

class ListLinksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLinksService = container.resolve(ListLinksService);

        const links = await listLinksService.execute();

        return response.json(links);

    }
}

export { ListLinksController };