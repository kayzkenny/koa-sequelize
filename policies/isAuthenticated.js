const { verify } = require("../services/jwt.service");

module.exports = async (ctx, next) => {
  let token = "";

  ctx.req.headers && ctx.req.headers.authorization
    ? (token = ctx.req.headers.authorization)
    : ctx.throw(401, "Authorization header is missing");

  const decodedToken = verify(token);

  const user = await ctx.db.User.findOne({
    where: {
      id: decodedToken.payload.user,
    },
  });

  if (user) {
    ctx.state.user = user.id;
    await next();
  } else {
    ctx.throw(401, "Unauthorized");
  }
};
