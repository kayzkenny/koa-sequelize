module.exports = {
  async create(ctx) {
    try {
      let { title, CompanyId } = ctx.request.body;

      switch (undefined) {
        case title:
          ctx.throw(400, "title is required");
        case CompanyId:
          ctx.throw(400, "CompanyId is required");
          break;

        default:
          ctx.body = await ctx.db.Job.create({ title, CompanyId });
          break;
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
