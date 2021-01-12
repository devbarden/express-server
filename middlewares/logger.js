import colors from 'colors'

const logger = (req, res, next) => {
  console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))

  next()
}

export default logger
