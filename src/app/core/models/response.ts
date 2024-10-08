import { Contact } from './contact';

export interface Response<T = any> {
    readonly success?: boolean,
    readonly code?: number;
    readonly message?: string,
    readonly respons?: T;
}

export type ResponseContact = Response<Contact>;
