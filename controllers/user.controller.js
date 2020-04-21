const { hashPassword, comparePassword } = require("../services/util.services");
const { issue } = require("../services/jwt.service");

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
  async login(ctx) {
    try {
      let { email, password } = ctx.request.body;

      switch (undefined) {
        case email:
          ctx.throw(400, "email is required");
        case password:
          ctx.throw(400, "password is required");
          break;

        default:
          const user = await ctx.db.User.findOne({
            where: { email },
          });
          switch (undefined) {
            case user:
              ctx.throw(500, "unable to process request");
              break;

            default:
              const matched = comparePassword(password, user.password);
              if (matched) {
                const token = issue(
                  {
                    payload: { user: user.id },
                  },
                  "1 day"
                );
                ctx.body = { token };
              } else {
                ctx.throw(500, "invalid password");
              }
              break;
          }
          break;
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
