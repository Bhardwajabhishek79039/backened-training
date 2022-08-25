const Mid1= function ( req, res, next){
 console.log("hii i am a middleware named Mid1")
 next()
}


 res.send({msg: "please check the no"})
}

module.exports.Mid1= mid1