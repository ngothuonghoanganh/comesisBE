import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Product extends Model {
  static get tableName() {
    return "product";
  }
  Id?: number;
  Name?: string;
  Thumbnail?: string;
  Description?: string;
  Code?: string;
  BrandId?: number;
  SourceId?: number;
  IsDeleted?: boolean;
  CreateDate?: Date;
  CategoryId?: number;
}
