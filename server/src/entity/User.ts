import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { v4 } from "uuid";

@ObjectType()
@Entity("Users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field()
  id: string;

  @Column("varchar", { unique: true })
  @Field()
  username!: string;

  @Column("varchar")
  @Field()
  displayname!: string;

  @Column("varchar", { unique: true })
  @Field()
  email!: string;

  @Column("varchar")
  password!: string;

  @Column("int", { default: 0 })
  tokenVer: number;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
