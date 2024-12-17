import JobPosting from "../models/job.model.js";

const handleUpdateJob = async (req, res) => {
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

    const updates = req.body;
    Object.keys(updates).forEach((key) => {
      job[key] = updates[key];
    });

    const updatedJob = await job.save();
    return res.status(200).json({
      error: false,
      message: "Job updated successfully.",
      data: updatedJob,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Error while updating job. Try again later.",
      data: [],
    });
  }
};

export default handleUpdateJob;
