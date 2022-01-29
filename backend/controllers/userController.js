const registerUser = (req, res, next) => {
  res.send("Register Route")
}

const loginUser = (req, res, next) => {
  res.send("Login Route")
}

module.exports = {
  registerUser,
  loginUser
}