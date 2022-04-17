import { EAuthenticationEvent } from 'src/app/core/enum/enum.authentication-event'


export interface AuthenticationRequest {
    username: string,
    password: string
}


export interface AuthenticationResponse {
    token: string,
    qrCode: string
    message: string,
    status: string;
}

export interface AuthenticationEvent {
    type: EAuthenticationEvent,
    request: AuthenticationRequest,
    data: string
}