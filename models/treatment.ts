import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Treatment extends Model {
  static get tableName() {
    return "treatment";
  }
  Id?: number;
  IngredientId?: number;
  Description?: string;
  Icon?: string;
  IsDeleted?: boolean;
  CreateDate?: Date;
}
