module.exports = {
  async create(ctx) {
    try {
      let { firstName, lastName, email, JobId } = ctx.request.body;

      switch (undefined) {
        case firstName:
          ctx.throw(400, "firstName is required");
        case lastName:
          ctx.throw(400, "lastName is required");
        case email:
          ctx.throw(400, "email is required");
        case JobId:
          ctx.throw(400, "JobId is required");
          break;

        default:
          const candidate = await ctx.db.Candidate.create({
            firstName,
            lastName,
            email,
          });

          ctx.body = await ctx.db.Application.create({
            JobId,
            CandidateId: candidate.id,
          });
          break;
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
