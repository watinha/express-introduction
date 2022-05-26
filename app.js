import user from './model/user.js';

(async () => {
  console.log(await user.find());
})();
