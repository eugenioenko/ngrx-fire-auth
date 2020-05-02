import { IUser } from '../../models/user';

export interface IAuthState {
    user: IUser;
    settings: string;
    error: string;
}

export const initialAuthSate: IAuthState = {
    user: null,
    settings: null,
    error: null
}
