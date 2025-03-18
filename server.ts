import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core'

const server = new Ignitor(__dirname).httpServer()

server
  .start()
  .catch(console.error) 