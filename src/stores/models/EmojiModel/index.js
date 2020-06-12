class EmojiModel {
  id
  name
  image
  constructor(emojiObject) {
    this.id = emojiObject.id
    this.name = emojiObject.name
    this.image = emojiObject.image
  }
}

export default EmojiModel
