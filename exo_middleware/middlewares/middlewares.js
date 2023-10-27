export function authMiddleware(req, res, next) {
  let user = req.body.user;
  let password = req.body.password;
  if (user !== "admin") {
    res.sendStatus(401);
  } else if (password !== "password") {
    res.sendStatus(401);
  } else {
    res.sendStatus(200);
    next();
  }
}

export function queryDateMiddleware(req, res, next) {
  req.dateRequest = new Date();
  console.log(req.dateRequest);
  next();
}
