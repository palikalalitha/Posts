import getEmojisResponse from '../../fixtures/getEmojis.json'

class EmojiFixtureService {
  getEmojis() {
    return new Promise(resolve => {
      resolve(getEmojisResponse)
    })
  }
}

export default EmojiFixtureService
