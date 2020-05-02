import { IUser } from '../../models/user';

export interface IAuthState {
    user: IUser;
    settings: string;
}

export const initialAuthSate: IAuthState = {
    user: null,
    settings: null
}
