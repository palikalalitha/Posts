import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../utils/APIUtils'

import { apiMethods } from '../../constants/APIConstants'
import { EMOJIS_BASE_URL } from '../../constants/EnvironmentConstants'

import endpoints from '../endpoints'

const BASEURL = `${EMOJIS_BASE_URL}api/v1/`

class EmojiAPIService {
  api

  constructor() {
    this.api = create({
      baseURL: BASEURL
    })
  }
}

export default EmojiAPIService
