import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    var ACCESS_TOKEN_SECRET = "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225";
    var REFRESH_TOKEN_SECRET = "825y8i3hnfjmsbv7gwajbl7fobqrjfvbs7gbfj2q3bgh8f42";
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    })
}