import { INestApplication } from '@nestjs/common'
import path from 'path'
import serveFavicon from 'serve-favicon'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
// import csurf from 'csurf'
// import rateLimit from 'express-rate-limit'

export const configMiddlewares = (app: INestApplication) => {
  app.use(serveFavicon(path.join(process.cwd(), 'public/assets/favicon/favicon.ico')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('combined'))
  app.use(helmet())
  // app.use(csurf())
  app.enableCors({})
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // )
}
