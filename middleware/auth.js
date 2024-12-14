import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/index');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'b5a12fb11e6346ce87b6face465a5fdc9cc55ce04cd364eb0c18930a2122d87d');
        req.userId = decoded.userId;
        
        console.log('Authenticated user ID:', req.userId);
        
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.clearCookie('token');
        return res.redirect('/index');
    }
}; 