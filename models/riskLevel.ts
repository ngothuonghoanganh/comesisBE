import { Model } from "objection";
import * as connection from "./db/connection";

Model.knex(connection.knex);

export class RiskLevel extends Model {
  static get tableName() {
    return "riskLevel";
  }
  Id?: number;
  Level?: string;
  Color?: string;
  IsDeleted?: boolean;
  CreateDate?: Date;
}