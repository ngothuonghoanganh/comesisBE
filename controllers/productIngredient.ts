import { ProductIngredient } from "../models/productIngredient";

class ProIn {
  public createProIn = async (req: any, res: any, next: any) => {
    try {
      let {
        productId = 0,
        ingredientId = 0,
      } = req.body;
      if (!productId || productId === "") {
        return res.status(400).send("proId is not empty");
      }
      if (!ingredientId || ingredientId === "") {
        return res.status(400).send("IngId is not empty");
      }
      await ProductIngredient.query()
        .insert({
          ProductId : productId,
          IngredientId : ingredientId,
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listProIn = async (req: any, res: any, next: any) => {
    try {

      const List = await ProductIngredient.query()
        .select()
      return res.send(List);
    } catch (error) {
      console.error(error);
    }
  };

  public updateProIn = async (req: any, res: any, next: any) => {
    try {
      const { productIngredientId } = req.params

      let {
        productId = 0,
        ingredientId = 0,
      } = req.body;
      if (!productIngredientId || productIngredientId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!productId || productId === "") {
        return res.status(400).send("proId is not empty");
      }
      if (!ingredientId || ingredientId === "") {
        return res.status(400).send("IngId is not empty");
      }
      await ProductIngredient.query()
        .update({
            ProductId : productId,
            IngredientId : ingredientId,
        }).where("Id", productIngredientId)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteProIn = async (req: any, res: any, next: any) => {
    try {
      const { productIngredientId } = req.params
      if (!productIngredientId || productIngredientId === "") {
        return res.send("Id is not empty");
      }
      await ProductIngredient.query()
        .deleteById(productIngredientId);
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getProductIngredientById = async (req: any, res: any, next: any) => {
    try {
      const { productIngredientId } = req.params
      if(!productIngredientId || productIngredientId === ""){
        return res.send("Id is not found")
      }

      const productIngredientItem: any = await ProductIngredient.query()
        .select().where("Id", productIngredientId)
        .first();
      
        return res.send(productIngredientItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const ProductIngredientController = new ProIn();
