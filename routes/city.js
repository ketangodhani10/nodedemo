// const express = require('express');
// const router = express.Router();
// const city = require("../controllers/city.js");

// router.post("/city", city.create);
// router.get("/city", city.getAll);
// router.get("/city/:cityId", city.get);
// router.put("/city/:cityId", city.update);
// router.delete("/city/:cityId", city.delete);
// router.delete("/city", city.deleteAll);

// module.exports = router;

module.exports = app => {
    const city = require("../controllers/city.js");
    const auth = require("./auth");
    app.post("/city", city.create);
    //app.get("/city", city.getAll);
    app.get("/cityall/:limit", auth, city.getAll);
    app.get("/city/:cityId", city.get);
    app.put("/city/:cityId", city.update);
    app.delete("/city/:cityId", city.delete);
    app.delete("/city", city.deleteAll);
};