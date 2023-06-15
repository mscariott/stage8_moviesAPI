class userMiddlewares{

  warn(request,response,next){
    console.log("O usuario Middlwares acessou o middleware")
    next()
  }
}

module.exports = userMiddlewares