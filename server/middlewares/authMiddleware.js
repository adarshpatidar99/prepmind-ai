import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const isAuth = async(req, res, next) => {

      try {
        
        const {token} = req.cookies;

        if(!token) {
           return res.status(401).json({
            success: false,
            message: "Not LogggedIn..."
           })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);

        next();

      } catch (error) {
        res.status(401).json({ message: "Authentication failed" });
      }

}

export default isAuth
