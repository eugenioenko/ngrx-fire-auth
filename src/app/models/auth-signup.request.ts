import { IAuthLoginRequest } from './auth-login.request';

export interface IAuthSignupRequest extends IAuthLoginRequest {
    confirmPassword: string;
}
