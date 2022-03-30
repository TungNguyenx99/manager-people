import jwt from 'jsonwebtoken'
const JWT_SECRET = '123!@#abc'
const generateToken=(id) => {
    return jwt.sign({id},JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generateToken