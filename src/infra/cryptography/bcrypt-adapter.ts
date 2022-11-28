import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/cryptography/hashed'

export class BcryptAdapter implements Hasher {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
