/**
 * Utility function for processing the response of http call using axios.
 * @param {Object} response Response object
 * @return Promise
 */

import get from 'lodash/get'
import isPlainObject from 'lodash/isPlainObject'

export const processResponse = response => {
  return response
    .then(res => {
      if (res.data instanceof Array) {
        return res.data
      } else if (isPlainObject(res.data)) {
        return {
          ...res.data
        }
      } else {
        return res.data
      }
    })
    .catch(err => {
      throw get(err, 'response.data')
    })
}
