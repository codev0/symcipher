import {Command} from '@oclif/command'
import nanoid from 'nanoid'

export default class Generate extends Command {
  static description = 'Generate suitable password for this tool'

  async run() {
    this.log(`Here is your new password: ${nanoid(16)}`)
  }
}
