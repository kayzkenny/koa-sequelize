module.exports = {
  async create(ctx) {
    try {
      // create a new compnay record
      ctx.body = ctx.db.Company.create({
        name: ctx.request.body.name,
        city: ctx.request.body.city,
        address: ctx.request.body.address,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
