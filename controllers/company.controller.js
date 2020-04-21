module.exports = {
  // create a new company record
  async create(ctx) {
    try {
      let { name, city, address } = ctx.request.body;

      switch (undefined) {
        case name:
          ctx.throw(400, "name is required");
        case city:
          ctx.throw(400, "city is required");
        case address:
          ctx.throw(400, "address is required");
          break;

        default:
          ctx.body = await ctx.db.Company.create({
            name: ctx.request.body.name,
            city: ctx.request.body.city,
            address: ctx.request.body.address,
          });
          break;
      }
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
  // find one company record
  async findOne(ctx) {
    try {
      const company = await ctx.db.Company.findOne({
        where: {
          id: ctx.params.id,
        },
      });
      !company ? ctx.throw(404, "company id not found") : (ctx.body = company);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  // delete one company record
  async destroy(ctx) {
    try {
      const result = await ctx.db.Company.destroy({
        where: {
          id: ctx.params.id,
        },
      });
      !result
        ? ctx.throw(404, "company id not found")
        : (ctx.body = `company with id: ${ctx.params.id} delete succesfully`);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
