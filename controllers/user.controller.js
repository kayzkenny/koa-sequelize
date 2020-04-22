const { hashPassword, comparePassword } = require("../services/util.services");
const { issue } = require("../services/jwt.service");

module.exports = {
  /**
   * @api {post} /signup
   * @apiGroup Users
   * @apiName signupUser
   * @apiParam {String} [email] user email
   * @apiParam {String} [password] user password
   * @apiParamExample {String} Request Params :
   * {
   *  "email" : "test@gmail.com"
   *  "password" : "password123"
   * }
   * @apiSuccess {String} Msg Signup Successful
   * @apiSuccessExample {json} Signup-Success-Response :
   * HTTP/1.1 200k
   * {
   *  "msg" : "Signup Successful"
   * }
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/signup
   * @apiDescription create new user account
   */
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
  /**
   * @api {post} /login
   * @apiGroup Users
   * @apiName loginUser
   * @apiParam {String} [email] user email
   * @apiParam {String} [password] user password
   * @apiParamExample {String} Request Params :
   * {
   *  "email" : "test@gmail.com"
   *  "password" : "password123"
   * }
   * @apiSuccess {String} Obj JWT Token
   * @apiSuccessExample {json} Login-Success-Response :
   * HTTP/1.1 200k
   * {
   *  "token" : "onf2897408bf2308ygfb23874bf2"
   * }
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/login
   * @apiDescription login with user account details
   */
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
