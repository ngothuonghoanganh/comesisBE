import { Blog } from "../models/blog";

class Blo {
  public createBlog = async (req: any, res: any, next: any) => {
    try {
      let {
        title = "",
        content = "",
        date = "",
        image = "",
        userId = req.user.Id,
      } = req.body;
      if (!title || title === "") {
        return res.status(400).send("title is not empty");
      }
      await Blog.query()
        .insert({
        Title: title,
        Content: content,
        Date : date,
        Image: image,
        UserId: userId
        
        })
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listBlog = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "Title", dataCondition = "%%" } = req.query;
      const blogList = await Blog.query()
        .select()
        .where("IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(blogList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateBlog = async (req: any, res: any, next: any) => {
    try {
      const { blogId } = req.params

      let {
        title = "",
        content = "",
        date = "",
        image = "",
        userId = req.user.Id,
      } = req.body;
      if (!blogId || blogId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!title || title === "") {
        return res.status(400).send("Title is not empty");
      }
      await Blog.query()
        .update({
          Title: title,
          Content: content,
          Date : date,
          Image: image,
          UserId: userId
        }).where("Id", blogId)
        .andWhere("IsDeleted", false)
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteBlog = async (req: any, res: any, next: any) => {
    try {
      const { blogId } = req.params
      if (!blogId || blogId === "") {
        return res.send("Id is not empty");
      }
      await Blog.query()
        .update({
          IsDeleted: true,
        }).where("Id", blogId)
        .andWhere("IsDeleted", false)
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getBlogById = async (req: any, res: any, next: any) => {
    try {
      const { blogId } = req.params
      if(!blogId || blogId === ""){
        return res.send("Id is not found")
      }

      const blogItem: any = await Blog.query()
        .select().where("Id", blogId)
        .andWhere("IsDeleted", false)
        .first();
      
        return res.send(blogItem);

      }catch (error) {
        console.error(error);
      }
  };
}

export const BlogController = new Blo();
