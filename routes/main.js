const login = async (req, res) => {
  res.send("login/signup route");
};

const dashboard = async (req, res) => {
  const luckyNum = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `hello`, secret: `Here is your token ${luckyNum}` });
};

module.exports = { login, dashboard };
