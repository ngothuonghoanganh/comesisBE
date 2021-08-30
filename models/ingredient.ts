import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Ingredient extends Model {
  static get tableName() {
    return "ingredient";
  }
  Id?: number;
  Name?: string;
  Description?: string;
  IsDeleted?: boolean;
  CreateDate?: Date;
  RiskLevelId?: number;
}
