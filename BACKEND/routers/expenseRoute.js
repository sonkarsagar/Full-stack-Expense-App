const express=require('express')
const router=express.Router()
const expenseControl=require('../controllers/expenseControl')

router.get('/expense',expenseControl.expenseMain)

router.post('/expense',expenseControl.expensePost)

router.get('/expense/:id',expenseControl.expenseGet)

router.delete('/expense/:id',expenseControl.expenseDelete)

module.exports=router