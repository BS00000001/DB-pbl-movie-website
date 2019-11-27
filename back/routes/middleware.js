const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ info: '로그인이 필요합니다.' });
  }
};

const isNotLoggedIn = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ info: '이미 로그인이 되어있습니다.' });
  }
};

module.exports = { isLoggedIn, isNotLoggedIn }