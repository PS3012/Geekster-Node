import JobPosting from "../models/job.model.js";

const handleGetAllJobs = async (req, res) => {
  try {
    const jobs = await JobPosting.find({});
    return res.status(200).json({
      error: false,
      message: "Jobs Fetched Successfully!",
      data: jobs,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Error fetching jobs!",
      data: [],
    });
  }
};

export default handleGetAllJobs;
