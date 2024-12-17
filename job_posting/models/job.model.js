import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    referenceId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
    },
    employmentType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    currency: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
    },
    aboutCompany: {
      type: String,
    },
    experience: {
      type: String,
    },
    skills: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobPosting = mongoose.model("jobs", JobSchema);

export default JobPosting;
