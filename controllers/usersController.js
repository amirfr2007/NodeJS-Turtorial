const users = require("../models/userModel");

const getUsers = (req, res) => {
  const job = req.query.job;
  const age = parseInt(req.query.age);
  const name = req.query.name;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const sort = req.query.sort;
  const search = req.query.search;

  const searchedUsers = users.filter(
    (u) => !search || u.name.toLowerCase().includes(search?.toLowerCase()),
  );

  const filteredUsers = searchedUsers.filter(
    (u) =>
      (!job || u.job === job) &&
      (!age || u.age === age) &&
      (!name || u.name === name),
  );

  let sortedUsers = [...filteredUsers];

  if (sort === "ageDescending") {
    sortedUsers = [...filteredUsers].sort((a, b) => b.age - a.age);
  }
  if (sort === "ageAscending") {
    sortedUsers = [...filteredUsers].sort((a, b) => a.age - b.age);
  }
  if (sort === "nameAscending") {
    sortedUsers = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }
  if (sort === "nameDescending") {
    sortedUsers = [...filteredUsers].sort((a, b) =>
      b.name.localeCompare(a.name),
    );
  }
  if (sort === "jobAscending") {
    sortedUsers = [...filteredUsers].sort((a, b) => a.job.localeCompare(b.job));
  }
  if (sort === "jobDescending") {
    sortedUsers = [...filteredUsers].sort((a, b) => b.job.localeCompare(a.job));
  }

  const paginatedUsers = sortedUsers.slice(start, end);

  res.json({
    success: true,
    data: paginatedUsers,
  });
};

const getUserId = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json({
      success: true,
      data: user,
    });
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
};

const createUser = (req, res) => {
  const { name, age, job } = req.body;

  if (!req.body.name || req.body.age === undefined || !req.body.job) {
    return res
      .status(400)
      .json({ success: false, message: "Name, age, and job are required" });
  }

  if (typeof age !== "number") {
    return res
      .status(400)
      .json({ success: false, message: "Age must be a number" });
  }

  if (typeof job !== "string" || typeof name !== "string") {
    return res
      .status(400)
      .json({ success: false, message: "Name and job must be strings" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
    job,
  };

  if (!name || !age || !job) {
    return res.status(400).json({
      success: false,
      message: "Name, age, and job are required",
    });
  }

  if (typeof age !== "number") {
    return res.status(400).json({
      success: false,
      message: "Age must be a number",
    });
  }

  users.push(newUser);
  res.status(201).json({
    success: true,
    data: newUser,
  });
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user)
    return res.status(404).json({ success: false, message: "user not found" });

  if (req.body.name !== undefined && typeof req.body.name !== "string") {
    return res.status(400).json({
      success: false,
      message: "name must be a string",
    });
  }

  if (req.body.age !== undefined && typeof req.body.age !== "number") {
    return res.status(400).json({
      success: false,
      message: "age must be a number",
    });
  }

  if (req.body.job !== undefined && typeof req.body.job !== "string") {
    return res.status(400).json({
      success: false,
      message: "job must be a string",
    });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  if (req.body.age !== undefined) {
    user.age = req.body.age;
  }

  if (req.body.job !== undefined) {
    user.job = req.body.job;
  }

  return res.json({ success: true, data: user });
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1)
    return res.status(404).json({ success: false, message: "User not found" });

  const deletedUser = users.splice(userIndex, 1);

  return res.status(200).json({
    success: true,
    data: deletedUser[0],
  });
};

const replaceUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: "user not found" });
  }

  if (
    req.body.name === undefined ||
    req.body.age === undefined ||
    req.body.job === undefined
  ) {
    return res
      .status(400)
      .json({ success: false, message: "name, age and job are required" });
  }

  if (typeof req.body.age !== "number") {
    return res
      .status(400)
      .json({ success: false, message: "age must be a number" });
  }
  if (typeof req.body.name !== "string" || typeof req.body.job !== "string") {
    return res
      .status(400)
      .json({ success: false, message: "name and job must be strings" });
  }

  user.name = req.body.name;
  user.age = req.body.age;
  user.job = req.body.job;

  res.json({ success: true, data: user });
};

const getUsersStats = (req, res) => {
  const totalUsers = users.length;
  const ageSum = users.reduce((total, user) => total + user.age, 0);
  const averageAge = ageSum / totalUsers;
  const sortedUsers = [...users].sort((a, b) => a.age - b.age);
  const oldestUser = sortedUsers[totalUsers - 1];
  const youngestUser = sortedUsers[0];

  res.json({
    success: true,
    data: {
      totalUsers,
      averageAge,
      oldestUser,
      youngestUser,
    },
  });
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  replaceUser,
  getUsersStats,
};
