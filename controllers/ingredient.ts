import { Ingredient } from "../models/ingredient";

class Ingred {
  public createIngredient = async (req: any, res: any, next: any) => {
    try {
      let {
        name = "",
        description = "",
        riskLevelId = "",
      } = req.body;
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      if (!riskLevelId || riskLevelId === "") {
        return res.status(400).send("riskLevelId is not empty");
      }
      await Ingredient.query()
        .insert({
          Name : name,
          Description : description,
          RiskLevelId : riskLevelId
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listIngredient = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "ingredient.Name", dataCondition = "%%" } = req.query;

      const List = await Ingredient.query()
        .select("Ingredient.*","riskLevel.Level","riskLevel.color").join("riskLevel","riskLevel.Id","ingredient.riskLevelId")
        .where("ingredient.IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(List);
    } catch (error) {
      console.error(error);
    }
  };

  public updateIngredient = async (req: any, res: any, next: any) => {
    try {
      const { ingredientId } = req.params

      let {
        name = "",
        description = "",
        riskLevelId = "",
      } = req.body;
      if (!ingredientId || ingredientId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      if (!riskLevelId || riskLevelId === "") {
        return res.status(400).send("riskLevelId is not empty");
      }
      await Ingredient.query()
        .update({
            Name : name,
            Description : description,
            RiskLevelId : riskLevelId
        }).where("Id", ingredientId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteIngredient = async (req: any, res: any, next: any) => {
    try {
      const { ingredientId } = req.params
      if (!ingredientId || ingredientId === "") {
        return res.send("Id is not empty");
      }
      await Ingredient.query()
        .update({
          IsDeleted: true,
        }).where("Id", ingredientId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getIngredientById = async (req: any, res: any, next: any) => {
    try {
      const { ingredientId } = req.params
      if(!ingredientId || ingredientId === ""){
        return res.send("Id is not found")
      }

      const ingredientItem: any = await Ingredient.query()
        .select().where("Id", ingredientId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(ingredientItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const IngredientController = new Ingred();
