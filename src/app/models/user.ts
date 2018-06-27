export class User {
    _id?: string;
    name?: string;
    username: string;
    password?: string;
    role?: string;

    constructor(
        username,
        password
    ) {
        this.username = username;
        this.password = password;
    }
}
