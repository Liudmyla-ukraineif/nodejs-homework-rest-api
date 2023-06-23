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
  signin,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
