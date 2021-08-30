import { Comment } from "../models/comment";

class Com {
  public createComment = async (req: any, res: any, next: any) => {
    try {
      let {
        blogId = 0,
        userId = req.user.Id,
        productId = 0,
        content = "",
        rating = 0,
      } = req.body;
      if (!content || content === "") {
        return res.status(400).send("content is not empty");
      }
      await Comment.query().insert({
        BlogId: blogId,
        UserId: userId,
        ProductId: productId,
        Content: content,
        Rating: rating,
      });
      return res.send("insert success");
    } catch (error) {
      console.error(error);
    }
  };

  public listComment = async (req: any, res: any, next: any) => {
    try {
      const { conditions = "comment.Content", dataCondition = "%%" } = req.query;

      const commentList = await Comment.query()
        .select("comment.*", "user.FirstName", "user.LastName", "user.Avt")
        .join("user", "user.Id", "comment.UserId")
        .where("comment.IsDeleted", false)
        .andWhereRaw(`${conditions} like '${dataCondition}'`);
      return res.send(commentList);
    } catch (error) {
      console.error(error);
    }
  };

  public updateComment = async (req: any, res: any, next: any) => {
    try {
      const { commentId } = req.params;

      let {
        blogId = 0,
        userId = req.user.Id,
        productId = 0,
        content = "",
        rating = 0,
      } = req.body;
      if (!commentId || commentId === "") {
        return res.status(400).send("Id is not empty");
      }
      if (!content || content === "") {
        return res.status(400).send("Content is not empty");
      }
      await Comment.query()
        .update({
          BlogId: blogId,
          UserId: userId,
          ProductId: productId,
          Content: content,
          Rating: rating,
        })
        .where("Id", commentId)
        .andWhere("IsDeleted", false);
      return res.send("Update successful");
    } catch (error) {
      console.error(error);
    }
  };

  public deleteComment = async (req: any, res: any, next: any) => {
    try {
      const { commentId } = req.params;
      if (!commentId || commentId === "") {
        return res.send("Id is not empty");
      }
      await Comment.query()
        .update({
          IsDeleted: true,
        })
        .where("Id", commentId)
        .andWhere("IsDeleted", false);
      return res.send("Delete successful");
    } catch (error) {
      console.error(error);
    }
  };

  public getCommentById = async (req: any, res: any, next: any) => {
    try {
      const { commentId } = req.params;
      if (!commentId || commentId === "") {
        return res.send("Id is not found");
      }

      const commentItem: any = await Comment.query()
        .select()
        .where("Id", commentId)
        .andWhere("IsDeleted", false)
        .first();

      return res.send(commentItem);
    } catch (error) {
      console.error(error);
    }
  };
}

export const CommentController = new Com();
