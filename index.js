import express from 'express'
import path from 'path'
import serversRoutes from './routes/servers.js'
import { requestTime, logger } from './middlewares/index.js'

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestTime)
app.use(logger)
app.use(serversRoutes)

app.get('/', (req, res) => {
  res.render('index', { title: 'Main Page', active: 'main' })
})

app.get('/features', (req, res) => {
  res.render('features', { title: 'Features Page', active: 'features' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`)
})
