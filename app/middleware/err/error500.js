module.exports = function(error, req,res,next){
    if(process.env.NODE_ENV == 'production') {
        res.status(500).render('error/500');
        return;
    }
    next(error);
};