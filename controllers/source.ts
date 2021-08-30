import { Source } from "../models/source";

class Sou {
  public createSource = async (req: any, res: any, next: any) => {
    try {
      let {
        // productId = 0,
        storeLink = "",
        price = 0,
        reviewLink = "",
      } = req.body;
      await Source.query()
        .insert({
          // ProductId : productId,
          StoreLink: storeLink,
          Price: price,
          ReviewLink: reviewLink,
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listSource = async (req: any, res: any, next: any) => {
    try {
        const { conditions = "StoreLink", dataCondition = "%%" } = req.query;

        const sourceList = await Source.query()
          .select()
          .where("IsDeleted", false)
          .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(sourceList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateSource = async (req: any, res: any, next: any) => {
    try {
      const { sourceId } = req.params
      let {
        // productId = 0,
        storeLink = "",
        price = 0,
        reviewLink = "",
      } = req.body;
      if (!sourceId || sourceId === "") {
        return res.status(400).send("Id is not empty");
      }
      await Source.query()
        .update({
          // ProductId : productId,
          StoreLink: storeLink,
          Price: price,
          ReviewLink: reviewLink,
        }).where("Id", sourceId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteSource = async (req: any, res: any, next: any) => {
    try {
      const { sourceId } = req.params
      if (!sourceId || sourceId === "") {
        return res.status(400).send("Id is not empty");
      }
      await Source.query()
        .update({
          IsDeleted: true,
        }).where("Id", sourceId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getSourceById = async (req: any, res: any, next: any) => {
    try {
      const { sourceId } = req.params
      if(!sourceId || sourceId === ""){
        return res.send("Id is not found")
      }

      const sourceItem: any = await Source.query()
        .select().where("Id", sourceId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(sourceItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const SourceController = new Sou();
