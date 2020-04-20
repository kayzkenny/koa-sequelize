module.exports = {
  // create a new company record
  async create(ctx) {
    try {
      ctx.body = await ctx.db.Company.create({
        name: ctx.request.body.name,
        city: ctx.request.body.city,
        address: ctx.request.body.address,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  // find all company records
  async find(ctx) {
    try {
      ctx.body = await ctx.db.Company.findAll();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
