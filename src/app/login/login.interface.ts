export interface usuario{
username: string;
password: string;
}
export interface RespAuth {
    status: boolean;
    user:   User;
    token:  string;
}

export interface User {
    username: string;
    fullname: string;
    role:     string;
}
