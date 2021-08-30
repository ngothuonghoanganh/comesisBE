import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Category extends Model {
  static get tableName() {
    return "category";
  }
  Id?: number;
  Type?: string;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
