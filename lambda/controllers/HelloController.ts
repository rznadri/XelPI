import { Controller, Get, Route } from "tsoa";

@Route("hello")
export class HelloController extends Controller {
    @Get("/")
    public get(): string {
        return "hello world";
    }
}