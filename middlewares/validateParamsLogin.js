export const validateParamsLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Falta username o password" });
  }
  next();
};
