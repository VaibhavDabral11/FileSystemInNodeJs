import express from "express";
import {
  createFile,
  testApi,
  readFile,
  updateFile,
  deleteFile,
} from "../controller/crud_opetations.js";
const router = express.Router();
router.get("/test", testApi);
router.post("/createFile", createFile);
router.get("/readFile", readFile);
router.put("/updateFile", updateFile);
router.put("/deleteFile", deleteFile);
export default router;
