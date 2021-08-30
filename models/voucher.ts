import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class Voucher extends Model {
  static get tableName() {
    return "voucher";
  }
  Id?: number;
  Name?: string;
  ExpireDate?: Date;
  Description?: string;
  BrandId?: number;
  IsDeleted?: boolean;
  CreateDate?: Date;
  Image?: string;
}
