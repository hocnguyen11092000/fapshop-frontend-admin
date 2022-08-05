export interface LoginResponse {
    accessToken: string
}

export interface User {
    username: string,
    password: string,
    email: string,
    role?: string
}

export interface AuthState {
    user?: User,
    accessToken: string
}