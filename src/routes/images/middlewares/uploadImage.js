module.exports = async (req, res) => {
  if (!req.file) {
    res.send({
      message: 'Upload image failed',
      data: {}
    })
  } else {
    res.send({
      message: 'Upload image success',
      data: {
        url:
          req.file &&
          `${process.env.EXPRESS_APP_API_URL}/uploads/${req.file.filename}`,
        file: req.file
      }
    })
  }
}
