import { Subject } from 'rxjs';

export interface IAlertMessage {
    type: string,
    text: string;
    action: string;
    subject: Subject<number>;
}
