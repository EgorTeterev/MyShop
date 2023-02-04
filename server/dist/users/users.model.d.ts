import { Model } from "sequelize-typescript";
interface UserCreationAtributes {
    name: string;
    surname: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAtributes> {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}
export {};
