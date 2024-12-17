import JobPosting from "../models/job.model.js";

const handleDeleteJob = async (req, res) => {
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

    await JobPosting.findOneAndDelete({ referenceId: referenceId });
    return res.status(200).json({
      error: false,
      message: `Job with reference id ${referenceId} deleted successfully.`,
      data: [],
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Error while deleting job. Try again later!",
      data: [],
    });
  }
};

export default handleDeleteJob;
