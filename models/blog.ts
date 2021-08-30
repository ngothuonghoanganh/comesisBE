import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Blog extends Model {
  static get tableName() {
    return "blog";
  }
  Id?: number;
  Title?: string;
  Content?: string;
  Date?: Date;
  Image?: string;
  UserId?: number;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
