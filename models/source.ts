import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Source extends Model {
  static get tableName() {
    return "source";
  }
  Id?: number;
  StoreLink?: string;
  Price?: number;
  ReviewLink?: string;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
