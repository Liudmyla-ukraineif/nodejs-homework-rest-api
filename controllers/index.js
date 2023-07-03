const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
} = require("./contacts-controller");

const { 
  signup, 
  signin, 
  verify,
  resendVerify,
  getCurrent, 
  logout,
  updateSubscription,
  updateAvatar,
} = require("./auth-controller");

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
  signup,
  verify,
  resendVerify,
  signin,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
