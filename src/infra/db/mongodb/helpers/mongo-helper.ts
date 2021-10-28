import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.connection = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.connection.close()
  },

  getCollection (name: string): Collection {
    return this.connection.db().collection(name)
  },

  map (data: any): any {
    const { _id, ...dataWithoutId } = data
    return Object.assign({}, dataWithoutId, { id: _id })
  }
}
