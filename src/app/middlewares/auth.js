module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // res.locals é um objeto que fica disponível para todas as views
    res.locals.user = req.session.user
    return next()
  }

  return res.redirect('/')
}
