import { RiskLevel } from "../models/riskLevel";

class Risk {
  public createRiskLevel = async (req: any, res: any, next: any) => {
    try {
      let {
        level = "",
        color = "",
      } = req.body;
      if (!level || level === "") {
        return res.status(400).send("level is not empty");
      }
      if (!color || color === "") {
        return res.status(400).send("color is not empty");
      }
      await RiskLevel.query()
        .insert({
          Level : level,
          Color : color,
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listRiskLevel = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Level", dataCondition = "%%" } = req.query;
      const List = await RiskLevel.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(List);
    } catch (error) {
      console.error(error);
    }
  };

  public updateRiskLevel = async (req: any, res: any, next: any) => {
    try {
      const { riskLevelId } = req.params

      let {
        level = "",
        color = "",
      } = req.body;
      if (!riskLevelId || riskLevelId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!level || level === "") {
        return res.status(400).send("level is not empty");
      }
      if (!color || color === "") {
        return res.status(400).send("color is not empty");
      }
      await RiskLevel.query()
        .update({
            Level : level,
            Color : color,
        }).where("Id", riskLevelId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteRiskLevel = async (req: any, res: any, next: any) => {
    try {
      const { riskLevelId } = req.params
      if (!riskLevelId || riskLevelId === "") {
        return res.send("Id is not empty");
      }
      await RiskLevel.query()
        .update({
          IsDeleted: true,
        }).where("Id", riskLevelId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getRiskLevelById = async (req: any, res: any, next: any) => {
    try {
      const { riskLevelId } = req.params
      if(!riskLevelId || riskLevelId === ""){
        return res.send("Id is not found")
      }

      const riskLevelItem: any = await RiskLevel.query()
        .select().where("Id", riskLevelId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(riskLevelItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const RiskLevelController = new Risk();
