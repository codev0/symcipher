import {Buffer} from 'buffer'
import {createCipheriv, createDecipheriv} from 'crypto'

export function encrypt(text: string, key: string, iv: string) {
  let cipher = createCipheriv('aes-128-cbc', key, iv)
  let encrypted = cipher.update(text)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return encrypted.toString('hex')
}

export function decrypt(text: string, key: string, iv: string) {
  let encryptedText = Buffer.from(text, 'hex')
  let decipher = createDecipheriv('aes-128-cbc', Buffer.from(key), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}
