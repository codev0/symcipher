import {Command, flags} from '@oclif/command'

import {decrypt, encrypt} from '../modules/symcipher'

const iv = '1234123412341234'
const key = '1234123412341234'

export default class Encrypt extends Command {
  static description = 'Cipher your secreets with symmetric encryption'

  static args = [
    {
      name: 'target',
      description: 'Your secreet 16 symbols length string',
      required: true
    },
    {
      name: 'password',
      description: 'password',
      required: true
    }
  ]

  async run() {
    const {args,flags} = this.parse(Encrypt)

    if (args.password.length !== 16 && typeof args.password === 'string') {
      this.error("🤯  It's disaster! You passed wrong target, it must be an string and length equal 16")
    } else {
      this.log(`Encrypted: ${encrypt(args.target, key, iv)}`)
      this.log(`Decrypted: ${decrypt(encrypt(args.target, key, iv), key, iv)}`)
    }
  }
}
