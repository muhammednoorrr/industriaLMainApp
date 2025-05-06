import express from 'express';
import {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  createHospital,
  getAllHospitals,
  updateHospital,
  deleteHospital
} from '../controllers/superadmin.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

// Admin routes
router.post('/admins', authenticateToken, createAdmin);
router.get('/admins', authenticateToken, getAllAdmins);
router.put('/admins/:id', authenticateToken, updateAdmin);
router.delete('/admins/:id', authenticateToken, deleteAdmin);

// Hospital routes
router.post('/hospitals', authenticateToken, createHospital);
router.get('/hospitals', authenticateToken, getAllHospitals);
router.put('/hospitals/:id', authenticateToken, updateHospital);
router.delete('/hospitals/:id', authenticateToken, deleteHospital);

export default router;
