const trim = function(){
 let name = "  abhishek bhardwaj  "
 name = name.trim()
 console.log(name)
}

const change to uppercase = function(){
  let upperCaseString = "abhishek bhardwaj"
  upperCaseString = upperCaseString.toUpperCase()
  console.log(upperCaseString)

}
const changeToLowercase = function(){
 let changeToLowercaseString = "abhishek bhardwaj"
  lowerCaseString = lowerCaseString.toLowercase()
  console.log(lowerCaseString)

}

module.exports.trimMystring = trim
module.exports.getupperCasesString = changeTouppercase
module.exports.getlowerCasesString = changeToLowercase