import { TreatmentProduct } from "../models/treatmentProduct";

class TreatPro {
  public createTreatPro = async (req: any, res: any, next: any) => {
    try {
      let { productId = 0, treatmentId = 0 } = req.body;
      if (!productId || productId === "") {
        return res.status(400).send("proId is not empty");
      }
      if (!treatmentId || treatmentId === "") {
        return res.status(400).send("TreatId is not empty");
      }
      await TreatmentProduct.query().insert({
        ProductId: productId,
        TreatmentId: treatmentId,
      });
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listTreatPro = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "ProductId", dataCondition = "%%" } = req.query;

      const List = await TreatmentProduct.query()
        .select()
        .whereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(List);
    } catch (error) {
      console.error(error);
    }
  };

  public updateTreatPro = async (req: any, res: any, next: any) => {
    try {
      const { treatmentProductId } = req.params;

      let { productId = 0, treatmentId = 0 } = req.body;
      if (!treatmentProductId || treatmentProductId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!productId || productId === "") {
        return res.status(400).send("proId is not empty");
      }
      if (!treatmentId || treatmentId === "") {
        return res.status(400).send("TreatId is not empty");
      }
      await TreatmentProduct.query()
        .update({
          ProductId: productId,
          TreatmentId: treatmentId,
        })
        .where("Id", treatmentProductId);
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteTreatPro = async (req: any, res: any, next: any) => {
    try {
      const { treatmentProductId } = req.params;
      if (!treatmentProductId || treatmentProductId === "") {
        return res.send("Id is not empty");
      }
      await TreatmentProduct.query().deleteById(treatmentProductId);
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getTreatProById = async (req: any, res: any, next: any) => {
    try {
      const { treatmentProductId } = req.params;
      if (!treatmentProductId || treatmentProductId === "") {
        return res.send("Id is not found");
      }

      const treatProItem: any = await TreatmentProduct.query()
        .select()
        .where("Id", treatmentProductId)
        .first();

      return res.send(treatProItem);
    } catch (error) {
      console.error(error);
    }
  };
}

export const TreatmentProductController = new TreatPro();
