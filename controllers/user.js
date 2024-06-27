import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function getUsers(req, res) {
  const users = await User.find();
  res.send(users);
}
export async function getUserById(req, res) {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.send({
      message: "User not found",
    });
  }
}
export async function createUser(req, res) {
  const userInfos = req.body;
  const password = userInfos.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  console.log(hashedPassword);

  const createdUser = await User.create({
    ...userInfos,
    password: hashedPassword,
  });

  // after insertion
  res.send({
    message: "User created with success",
    user: createdUser,
  });
}
export async function deleteUser(req, res) {
  const id = req.params.id;
  const deletedUser = await User.findByIdAndDelete(id);

  res.send({
    msg: "deleted with success",
    user: deletedUser,
  });
}
export async function updateUser(req, res) {
  const id = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(id, req.body);

  res.send({
    msg: "updated with success",
    user: updatedUser,
  });
}

export async function deleteAllUsers(req, res) {
  await User.deleteMany();

  res.send({
    msg: "deleted all users with success",
  });
}

export async function login(req, res) {
  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body; // syntax equivalent to the above

  const user = await User.findOne({ email: email });

  if (!user) {
    res.send({
      message: "Invalid Email",
    });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!isValidPassword) {
    res.send({
      message: "Invalid Password",
    });
  } else {
    res.send(user);
  }
}
