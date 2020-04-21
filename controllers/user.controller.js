const { hashPassword, comparePassword } = require("../services/util.services");

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
          const encryptedPassword = await hashPassword(password);
          await ctx.db.User.create({
            email,
            password: encryptedPassword,
          });
          ctx.body = "Signup Successful!";
          break;
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
