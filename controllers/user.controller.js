module.exports = {
  async signup(ctx) {
    try {
      let { email, password } = ctx.request.body;

      switch (undefined) {
        case email:
          ctx.throw(400, "email is required");
        case password:
          ctx.throw(400, "password is required");
          break;

        default:
          ctx.body = await ctx.db.User.create({ email, password });
          break;
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
