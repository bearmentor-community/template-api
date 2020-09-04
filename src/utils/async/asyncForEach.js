module.exports = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    await callback(array[index], index, array)
  }
}
