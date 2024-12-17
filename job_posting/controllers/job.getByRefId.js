import JobPosting from "../models/job.model.js";

const handleGetJobByReferenceId = async (req, res) => {
  const { referenceId } = req.params;
  try {
    const job = await JobPosting.findOne({ referenceId: referenceId });

    if (!job) {
      return res.status(400).json({
        error: true,
        message: `Job with reference id - ${referenceId} not found`,
        data: [],
      });
    }

    return res.status(200).json({
      error: false,
      message: "Job Fetched Successfully!",
      data: job,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Error fetching job!",
      data: [],
    });
  }
};

export default handleGetJobByReferenceId;
