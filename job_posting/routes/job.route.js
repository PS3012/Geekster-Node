import { Router } from "express";
import handleCreateJob from "../controllers/job.create.js";
import handleGetAllJobs from "../controllers/job.readAll.js";
import handleDeleteJob from "../controllers/job.delete.js";
import handleGetJobByReferenceId from "../controllers/job.getByRefId.js";
import handleUpdateJob from "../controllers/job.update.js";

const router = Router();

router.get("/", handleGetAllJobs);
router.post("/", handleCreateJob);
router.get("/:referenceId", handleGetJobByReferenceId);
router.put("/:referenceId", handleUpdateJob);
router.delete("/:referenceId", handleDeleteJob);

export default router;
