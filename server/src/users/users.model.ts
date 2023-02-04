import { Column,DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAtributes{
  name:string;
  surname:string;
  email:string;
  password:string;  
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAtributes> {
  @Column({type: DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
  id:number; 
  @Column({type: DataType.STRING,allowNull:false})
  name:string;
  @Column({type: DataType.STRING,allowNull:false})
  surname:string;
  @Column({type: DataType.STRING,unique:true,allowNull:false})
  email:string;
  @Column({type: DataType.STRING,allowNull:false})
  password:string;
}