import { Product } from "../models/product";

class Pro {
  public createProduct = async (req: any, res: any, next: any) => {
    try {
      let {
        name = "",
        thumbnail = "",
        description = "",
        code = "",
        brandId = 0,
        sourceId = 0,
        categoryId = 0,
      } = req.body;
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      if (!code || code === "") {
        return res.status(400).send("code is not empty");
      }
      if (!brandId || brandId === "") {
        return res.status(400).send("brandId is not empty");
      }
      await Product.query().insert({
        Name: name,
        Thumbnail: thumbnail,
        Description: description,
        Code: code,
        BrandId: brandId,
        SourceId: sourceId,
        CategoryId: categoryId,
      });
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listProduct = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Name", dataCondition = "%%" } = req.query;
      const List = await Product.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(List);
    } catch (error) {
      console.error(error);
    }
  };

  public updateProduct = async (req: any, res: any, next: any) => {
    try {
      const { productId } = req.params;

      let {
        name = "",
        thumbnail = "",
        description = "",
        code = "",
        brandId = 0,
        sourceId = 0,
        categoryId = 0,
      } = req.body;
      if (!productId || productId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      if (!code || code === "") {
        return res.status(400).send("code is not empty");
      }
      if (!brandId || brandId === "") {
        return res.status(400).send("brandId is not empty");
      }
      await Product.query()
        .update({
          Name: name,
          Thumbnail: thumbnail,
          Description: description,
          Code: code,
          BrandId: brandId,
          SourceId: sourceId,
          CategoryId: categoryId,
        })
        .where("Id", productId)
        .andWhere("IsDeleted", false);
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteProduct = async (req: any, res: any, next: any) => {
    try {
      const { productId } = req.params;
      if (!productId || productId === "") {
        return res.send("Id is not empty");
      }
      await Product.query()
        .update({
          IsDeleted: true,
        })
        .where("Id", productId)
        .andWhere("IsDeleted", false);
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getProductById = async (req: any, res: any, next: any) => {
    try {
      const { productId } = req.params;
      if (!productId || productId === "") {
        return res.send("Id is not found");
      }

      const productItem: any = await Product.query()
        .select()
        .where("Id", productId)
        .andWhere("IsDeleted", false)
        .first();

      return res.send(productItem);
    } catch (error) {
      console.error(error);
    }
  };
}

export const ProductController = new Pro();
