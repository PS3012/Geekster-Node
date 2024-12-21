import express from "express";

const app = express();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileNumberRegex = /^\d{10,}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

const isValidName = (name) => {
  return name && name.charAt(0) === name.charAt(0).toUpperCase();
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/register", (req, res) => {
  const { firstName, lastName, email, password, mobile } = req.body;

  if (!firstName || !lastName || !email || !password || !mobile) {
    return res.status(422).json({
      error: true,
      message: "Invalid details. All fields are required.",
    });
  }

  if (!isValidName(firstName)) {
    return res.status(422).json({
      error: true,
      message: "Invalid first name. It should start with a capital letter.",
    });
  }

  if (!isValidName(lastName)) {
    return res.status(422).json({
      error: true,
      message: "Invalid last name. It should start with a capital letter.",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(422).json({
      error: true,
      message: "Invalid email format.",
    });
  }

  if (!passwordRegex.test(password)) {
    return res.status(422).json({
      error: true,
      message:
        "Invalid password format. Password should contains at least one special character, one uppercase letter, one numeric character and must be atleast 8 characters long.",
    });
  }

  if (!mobileNumberRegex.test(mobile)) {
    return res.status(422).json({
      error: true,
      message:
        "Invalid mobile number. Mobile number should be of atleast 10 digits and contains digits.",
    });
  }

  return res.status(201).json({
    error: false,
    message: "User registered successfully.",
    data: { firstName, lastName, email, mobile },
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: "Something went wrong. Please try again later.",
  });
});

app.listen(3000, () => console.log("Server Started!"));
