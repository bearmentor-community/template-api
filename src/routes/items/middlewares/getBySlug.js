const safe = require('safe-regex')

const Item = require('../model')

module.exports = async (req, res) => {
  // Find one item by slug, case insensitive
  const slug = req.params.slug
  // eslint-disable-next-line security/detect-non-literal-regexp
  const regexQuery = new RegExp(`^${slug}$`, 'i')
  const isRegexSafe = safe(regexQuery)

  if (!isRegexSafe) {
    res.status(200).send({
      message: 'Get item by slug is failed because item slug is malformed',
      data: {
        slug: slug
      }
    })
  } else {
    const item = await Item.findOne({
      slug: {
        $regex: regexQuery
      }
    })

    if (!item) {
      res.status(404).send({
        message: 'Get item by slug is failed because not found by that slug',
        data: {
          slug: slug
        }
      })
    } else {
      // Continue when everything is okay:
      // - Regex is safe
      // - User is found
      res.status(200).send({
        message: 'Get item by slug',
        data: {
          slug: slug,
          item: item
        }
      })
    }
  }
}
