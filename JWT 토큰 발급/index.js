const userDatabase = require('../Database');
const jwt = require('jsonwebtoken');

const login = (req,res,next) => {
    const {email,password} = req.body
    const userInfo = userDatabase.filter((item)=>{
      return item.email === email && item.password === password
    })[0];
    console.log(userInfo)
    if(!userInfo){
      res.status(403).json('Not Authorizd')
    }else{
      try{
        // 어세스 토큰 발급
         const accessToken = jwt.sign({
           id:userInfo.id,
           username:userInfo.username,
           email:userInfo.email
         },process.env.ACCESS_SECRET, {
           expiresIn : '1m',
           issuer: 'Woongs',
         })
        // 리프레쉬 토큰 발급

        const refreshToken = jwt.sign({
           id:userInfo.id,
           username:userInfo.username,
           email:userInfo.email
        },process.env.REFRESH_SECRET,{
          expiresIn: '24h',
          issuer: 'Woongs'
        })
        // 클라이언트 에게 전달하기 토큰 쿠키에 담아서 전송하기
      // res.cookie('accessToken', accessToken, {
      //      secure: true,
      //      httpOnly : true,
      //   })


      res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly : true,
      })
    

       res.json(200,{
         accessToken:accessToken
       })

      }catch(error){
       res.status(501).json(error)
      }
   }
}

const accessToken = (req,res) => {

}

const refreshToken = (req,res) => {

}

const loginSuccess = (req,res) => {

}

const logout = (req,res) => {

}

module.exports = {
  login,accessToken,refreshToken,loginSuccess,logout
}