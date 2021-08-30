import { Category } from "../models/category";

class Cate {
  public createCategory = async (req: any, res: any, next: any) => {
    try {
      let {
        type = "",
      } = req.body;
      if (!type || type === "") {
        return res.status(400).send("type is not empty");
      }
      await Category.query()
        .insert({
          Type: type
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listCategory = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Type", dataCondition = "%%" } = req.query;
      const categoryList = await Category.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(categoryList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateCategory = async (req: any, res: any, next: any) => {
    try {
      const { categoryId } = req.params

      let {
        type = "",
      } = req.body;
      if (!categoryId || categoryId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!type || type === "") {
        return res.status(400).send("Type is not empty");
      }
      await Category.query()
        .update({
          Type: type,
        }).where("Id", categoryId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteCategory = async (req: any, res: any, next: any) => {
    try {
      const { categoryId } = req.params
      if (!categoryId || categoryId === "") {
        return res.send("Id is not empty");
      }
      await Category.query()
        .update({
          IsDeleted: true,
        }).where("Id", categoryId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getCategoryById = async (req: any, res: any, next: any) => {
    try {
      const { categoryId } = req.params
      if(!categoryId || categoryId === ""){
        return res.send("Id is not found")
      }

      const categoryItem: any = await Category.query()
        .select().where("Id", categoryId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(categoryItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const CategoryController = new Cate();
