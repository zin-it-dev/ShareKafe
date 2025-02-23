import express, { Application } from 'express'

import categoryRoutes from '@/routes/category.routes'
import itemRoutes from '@/routes/item.routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// APIs
app.use('/categories', categoryRoutes)
app.use('/items', itemRoutes)

export default app
