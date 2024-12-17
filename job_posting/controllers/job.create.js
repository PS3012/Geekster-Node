import { nanoid } from "nanoid";
import JobPosting from "../models/job.model.js";

const handleCreateJob = async (req, res) => {
  const {
    title,
    description,
    category,
    employmentType,
    location,
    companyName,
  } = req.body;

  if (
    !title ||
    !description ||
    !category ||
    !employmentType ||
    !location ||
    !companyName
  ) {
    res.status(400).json({
      error: true,
      message: "All Fields are required!",
      data: [],
    });
  }

  const referenceId = `JOB${req.body.companyName
    .substring(0, 3)
    .toUpperCase()}${nanoid().toUpperCase()}`;

  const newJob = new JobPosting({ referenceId: referenceId, ...req.body });

  try {
    await newJob.save();
    return res.status(201).json({
      error: false,
      message: "Job Posted Successfully!",
      data: [newJob],
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Error while posting job. Try again after some time!",
      data: [],
    });
  }
};

export default handleCreateJob;
