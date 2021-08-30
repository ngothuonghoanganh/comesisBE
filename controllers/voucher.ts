import { Voucher } from "../models/voucher";

class Vou {
    private checkDate = (expireDate : Date) => {      
        
    };

  public createVoucher = async (req: any, res: any, next: any) => {
    try {
      let {
        name = "",
        expireDate = "",
        description = "",
        brandId = 0,
        image = "",
      } = req.body;
      if (!name || name === "") {
        return res.status(400).send("name is not empty");
      }
      await Voucher.query()
        .insert({
          Name: name,
          ExpireDate: expireDate,
          Description: description,
          BrandId: brandId,
          Image: image
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listVoucher = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Name", dataCondition = "%%" } = req.query;
      const voucherList = await Voucher.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(voucherList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateVoucher = async (req: any, res: any, next: any) => {
    try {
      const { voucherId } = req.params

      let {
        name = "",
        expireDate = "",
        description = "",
        brandId = 0,
        image = "",
      } = req.body;
      if (!voucherId || voucherId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!name || name === "") {
        return res.status(400).send("Name is not empty");
      }
      await Voucher.query()
        .update({
            Name: name,
            ExpireDate: expireDate,
            Description: description,
            BrandId: brandId, 
            Image: image
        }).where("Id", voucherId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteVoucher = async (req: any, res: any, next: any) => {
    try {
      const { voucherId } = req.params
      if (!voucherId || voucherId === "") {
        return res.send("Id is not empty");
      }
      await Voucher.query()
        .update({
          IsDeleted: true,
        }).where("Id", voucherId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getVoucherById = async (req: any, res: any, next: any) => {
    try {
      const { voucherId } = req.params
      if(!voucherId || voucherId === ""){
        return res.send("Id is not found")
      }

      const voucherItem: any = await Voucher.query()
        .select().where("Id", voucherId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(voucherItem);

      }catch (error) {
        console.error(error);
      }
  };

}

export const VoucherController = new Vou();