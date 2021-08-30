import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Brand extends Model {
  static get tableName() {
    return "brand";
  }
  Id?: number;
  Name?: string;
  Address?: string;
  Link?: string;
  UserId?: number;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
