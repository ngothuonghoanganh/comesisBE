import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class ProductIngredient extends Model {
  static get tableName() {
    return "product_ingredient";
  }
  Id?: number;
  ProductId?: number;
  IngredientId?: number;
}
