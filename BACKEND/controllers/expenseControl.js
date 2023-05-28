const expense=require('../models/expense')

exports.expenseMain=(req,res,next)=>{
    expense.findAll().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
}

exports.expensePost=(req,res,next)=>{
    expense.create({
        amount: req.body.amount,
        description: req.body.description,
        category: req.body.category
    }).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send(err)
    });
}

exports.expenseGet=(req,res,next)=>{
    // expense.findAll().then((result) => {
    //     result.forEach(element=>{
    //         if(element.id==req.params.id){
    //             res.json(element)
    //         }
    //     })
    // }).catch((err) => {
    //     res.status(400).send(err)
    // });
    expense.findByPk(req.params.id).then((result) => {
        if(result){
            res.json(result)
        }else{
            res.send('No Product Found to GET.')
        }
        
    }).catch((err) => {
        res.status(400).send(err)
    });
}

exports.expenseDelete=(req,res,next)=>{
    expense.findByPk(req.params.id).then((result) => {
        if(result){
            return result.destroy()
        }else{
            res.send('No Product Found to DELETE.')
        }
        
    }).then(result=>{
        res.status(200).send(result)
    }

    ).catch((err) => {
        console.log(err);
    });
}