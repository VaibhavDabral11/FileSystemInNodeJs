import express from "express";
import {
  createFile,
  testApi,
  readFile,
} from "../controller/crud_opetations.js";
const router = express.Router();
router.get("/test", testApi);
router.post("/createFile", createFile);
router.get("/readFile", readFile);
export default router;
