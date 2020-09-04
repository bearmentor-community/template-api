const mongoose = require('../../../config/mongoose')

module.exports = async (req, res) => {
  try {
    const isResetTrue = JSON.parse(req.query.resetEverything) === true

    if (!isResetTrue) {
      res.status(500).send({
        message: 'Reset everything is failed'
      })
    } else {
      try {
        const collections = await mongoose.connection.db.collections()

        for (const collection of collections) {
          await collection.deleteMany()
        }

        res.status(200).send({
          message: 'Reset everything is succees'
        })
      } catch (error) {
        res.status(500).send({
          message: 'Reset everything is failed',
          error: error.message
        })
      }
    }
  } catch (error) {
    res.status(500).send({
      message: 'Reset everything is failed',
      error: error.message
    })
  }
}
