import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class TreatmentProduct extends Model {
  static get tableName() {
    return "treatment_product";
  }
  Id?: number;
  ProductId?: number;
  TreatmentId?: number;
}
