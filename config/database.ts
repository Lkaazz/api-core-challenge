import { defineConfig } from '@adonisjs/lucid'
import app from '@adonisjs/core/services/app'
import env from '@adonisjs/core/services/env'

export default defineConfig({
  connection: 'sqlite',

  connections: {
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      }
    }
  }
}) 