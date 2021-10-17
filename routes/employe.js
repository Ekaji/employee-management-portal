const express = require("express");
const employeCtrls = require("../controllers/employe");

const router = express.Router();

router.post("/", employeCtrls.createEmploye);
router.get("/", employeCtrls.fetchEmploye);
router.get("/:id", employeCtrls.fetchOneEmploye);
router.delete("/:id", employeCtrls.deleteOneEmploye);

module.exports = router;
