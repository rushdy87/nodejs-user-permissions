const authUser = (req, res, next) => {
  if (!req.user) {
    return res.status(403).send('You need to sign in');
  }
  next();
};

const authRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(401).send('Not allowed');
  }
  next();
};

module.exports = {
  authUser,
  authRole,
};
