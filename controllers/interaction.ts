import { Interaction } from "../models/interaction";

class Inter {
  public createInteraction = async (req: any, res: any, next: any) => {
    try {
      let {
        isLike = false,
        userId = req.user.Id,
        blogId = 0,
      } = req.body;
      if (!blogId || blogId === "") {
        return res.status(400).send("Blog is not empty");
      }
      await Interaction.query()
        .insert({
        IsLike : isLike,
        UserId : userId,
        BlogId : blogId,
        
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listInteraction = async (req: any, res: any, next: any) => {
    try {
      const interactionList = await Interaction.query()
        .select()
        .where("IsDeleted", false)
      return res.send(interactionList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateInteraction = async (req: any, res: any, next: any) => {
    try {
      const { interactionId } = req.params

      let {
        isLike = false,
        userId = req.user.Id,
        blogId = 0,
      } = req.body;
      if (!blogId || blogId === "") {
        return res.status(400).send("blogId is not empty");
      }
      if (!interactionId || interactionId === "") {
        return res.status(400).send("Id is not empty");
      }
      await Interaction.query()
        .update({
            IsLike : isLike,
            UserId : userId,
            BlogId : blogId,
        }).where("Id", interactionId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteInteraction = async (req: any, res: any, next: any) => {
    try {
      const { interactionId } = req.params
      if (!interactionId || interactionId === "") {
        return res.send("Id is not empty");
      }
      await Interaction.query()
        .update({
          IsDeleted: true,
        }).where("Id", interactionId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getInteractionById = async (req: any, res: any, next: any) => {
    try {
      const { interactionId } = req.params
      if(!interactionId || interactionId === ""){
        return res.send("Id is not found")
      }

      const interactionItem: any = await Interaction.query()
        .select().where("Id", interactionId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(interactionItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const InteractionController = new Inter();
