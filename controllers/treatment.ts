import { Treatment } from "../models/treatment";

class Treat {
    public createTreatment = async (req: any, res: any, next: any) => {
      try {
        let {
            ingredientId  ="",
            description ="",
            icon ="",
        
          } = req.body;
          if (!description || description === "") {
            return res.send("Description is not empty");
          }
          await Treatment.query()
          .insert({
            IngredientId : ingredientId,
            Description : description,
            Icon : icon,
            })
        return res.send("insert success");
      } catch (error) {
        console.error(error);
      }
    };
    
    public listTreatment = async (req: any, res: any, next: any) => {
      try {
        const { conditions = "Description", dataCondition = "%%" } = req.query;
        const List = await Treatment.query()
            .select()
            .where("IsDeleted",false)
            .andWhereRaw(`${conditions} like '${dataCondition}'`);
        return res.send(List);
      } catch (error) {
        console.error(error);
      }
    };
    
    public updateTreatment = async (req: any, res: any, next: any) => {
      try {
        const { treatmentId } = req.params
        let {
          ingredientId  ="",
          description ="",
          icon ="",
        } = req.body;
        if (!treatmentId || treatmentId === "") {
          return res.status(400).send("Id is not empty");
        }
        if (!description || description === "") {
          return res.status(400).send("Description is not empty");
        }
        await Treatment.query()
            .update({
                IngredientId : ingredientId,
                Description : description,
                Icon : icon,
            }).where("Id",treatmentId)
            .andWhere("IsDeleted",false)
        return res.send("Update successful");
      } catch (error) {
        console.error(error);
      }
    };
    
    public deleteTreatment = async (req: any, res: any, next: any) => {
      try {
        const { treatmentId } = req.params
        if (!treatmentId || treatmentId === "") {
          return res.status(400).send("Id is not empty");
        }
        await Treatment.query()
            .update({
              IsDeleted : true,
            }).where("Id",treatmentId)
            .andWhere("IsDeleted",false)
        return res.send("Delete successful");
      } catch (error) {
        console.error(error);
      }
    };

    public getTreatmentById = async (req: any, res: any, next: any) => {
      try {
        const { treatmentId } = req.params
        if(!treatmentId || treatmentId === ""){
          return res.send("Id is not found")
        }
  
        const treatmentItem: any = await Treatment.query()
          .select().where("Id", treatmentId)
          .andWhere("IsDeleted", false)
          .first();
        
          return res.send(treatmentItem);
  
        }catch (error) {
          console.error(error);
        }
    };

  }
    
    export const TreatmentController = new Treat();