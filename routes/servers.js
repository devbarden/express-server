import { Router } from 'express'
import { getByID, getAll, create, remove } from '../controllers/servers.js'

const router = Router()

router.get('/api/server/:id', getByID)
router.get('/api/server', getAll)
router.post('/api/server', create)
router.delete('/api/server/:id', remove)

export default router
