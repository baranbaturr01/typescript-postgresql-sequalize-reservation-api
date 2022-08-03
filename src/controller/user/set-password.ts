import {Request, Response} from "express";
import UserService from "../../service/UserService";

const userService = new UserService();
const utils = require("../../libs/utils");

module.exports = (req: Request, res: Response) => {
    const token = req.body.token;
    const password: string = req.body.password;
    const code = req.body.code;

    // Todo: make set new password implementation

    // utils.jwtDecode(token).then((decoded:any) => {
    //     if (!decoded) {
    //         res.status(400).json({
    //             code: 400,
    //             message: "Invalid token"
    //         })
    //     }
    //     if(code !== decoded.code){
    //         res.status(400).json({
    //             code: 400,
    //             message: "Invalid code"
    //         })
    //     }
    //     console.log(decoded);
    //
    //
    //     userService.update(decoded.userId, {password: password}).then((user) => {
    //         res.json({
    //             success: true,
    //         })
    //     }).catch(err => {
    //         res.status(500).json({
    //             code: 500,
    //             message: err.message,
    //         })
    //     })
    //
    // })
}