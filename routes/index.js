const Router = require("koa-router");
const router = new Router();
const {
  CompanyController,
  JobController,
  ApplicationController,
} = require("../controllers");

// company routes
router.post("/companies", CompanyController.create);
router.get("/companies", CompanyController.find);
router.get("/companies/:id", CompanyController.findOne);
router.del("/companies/:id", CompanyController.destroy);
router.put("/companies/:id", CompanyController.update);

// jobs routes
router.post("/jobs", JobController.create);
router.get("/jobs", JobController.find);

// application routes
router.post("/applications", ApplicationController.create);

module.exports = router;
