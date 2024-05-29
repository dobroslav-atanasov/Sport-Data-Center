import { BaseAuth } from "./base/base-auth";

export interface UserSignIn extends BaseAuth {
    email: string
}