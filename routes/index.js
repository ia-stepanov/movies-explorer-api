const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFound = require('../errors/NotFoundError');

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFound('Запрашиваемая страница не существует'));
});

module.exports = router;
