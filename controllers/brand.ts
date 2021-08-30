import { Brand } from "../models/brand";

class Br {
  public createBrand = async (req: any, res: any, next: any) => {
    try {
      let {
        name = "",
        address = "",
        link = "",
        userId = req.user.Id,
      } = req.body;
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      await Brand.query()
        .insert({
        Name: name,
        Address: address,
        Link : link,
        UserId: userId
        
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listBrand = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Name", dataCondition = "%%" } = req.query;
      const brandList = await Brand.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(brandList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateBrand = async (req: any, res: any, next: any) => {
    try {
      const { brandId } = req.params

      let {
        name = "",
        address = "",
        link = "",
        userId = req.user.Id,
      } = req.body;
      if (!brandId || brandId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!name || name === "") {
        return res.status(400).send("Name is not empty");
      }
      await Brand.query()
        .update({
            Name: name,
            Address: address,
            Link : link,
            UserId: userId
        }).where("Id", brandId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteBrand = async (req: any, res: any, next: any) => {
    try {
      const { brandId } = req.params
      if (!brandId || brandId === "") {
        return res.send("Id is not empty");
      }
      await Brand.query()
        .update({
          IsDeleted: true,
        }).where("Id", brandId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

public getBrandById = async (req: any, res: any, next: any) => {
  try {
    const { brandId } = req.params
    if(!brandId || brandId === ""){
      return res.send("Id is not found")
    }

    const brandItem: any = await Brand.query()
      .select().where("Id", brandId)
      .andWhere("IsDeleted", false)
      .first();
    
      return res.send(brandItem);

    }catch (error) {
      console.error(error);
    }
};

}

export const BrandController = new Br();
