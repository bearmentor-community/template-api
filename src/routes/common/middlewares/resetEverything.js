const path = require('path')
const fs = require('fs')

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
        // Reset the database collection
        const collections = await mongoose.connection.db.collections()
        for (const collection of collections) {
          await collection.deleteMany()
        }

        // Remove all files inside uploads folder
        // except .gitkeep
        // console.log(path.join(__dirname, '../../../../public/uploads'))
        try {
          const uploadsDir = path.join(__dirname, '../../../../public/uploads')

          fs.readdir(uploadsDir, (error, files) => {
            if (error) console.error(error)
            files.forEach((file) => {
              const fileDir = path.join(uploadsDir, file)
              if (file !== '.gitkeep') {
                fs.unlinkSync(fileDir)
              }
            })
          })
        } catch (error) {
          console.error(error)
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
