import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Comment extends Model {
  static get tableName() {
    return "comment";
  }
  Id?: number;
  BlogId?: number;
  UserId?: number;
  ProductId?: number;
  Content?: string;
  Rating?: number;
  Date?: Date;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
