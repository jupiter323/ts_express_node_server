import {UserController} from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "get",
    route: "/users/phone/:phone",
    controller: UserController,
    action: "oneByPhone"
}, {
    method: "get",
    route: "/users/name/:name",
    controller: UserController,
    action: "oneByName"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];