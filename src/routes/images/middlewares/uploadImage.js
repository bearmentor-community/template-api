module.exports = async (req, res) => {
  res.send({
    message: 'Upload image success',
    data: {
      file: req.file
    }
  })
}
