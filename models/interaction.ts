import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Interaction extends Model {
  static get tableName() {
    return "interaction";
  }
  Id?: number;
  IsLike?: boolean;
  UserId?: number;
  BlogId?: number;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
