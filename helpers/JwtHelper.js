const JWT = require("jsonwebtoken");
const createError = require("http-errors");
//const User = require('../models/userModel');

//const {authModel} = require('../models/auth_studentModel');

module.exports = {
  signAccessToken: (UserId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "10m",
        issuer: "MbudaNjiraTechnologies.com",
        audience: UserId,
      };
      JWT.sign(payload, secret, options, (error, token) => {
        if (error) {
          console.log(error.message);
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  signRefreshToken: (UserId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.REFRESH_TOKEN_SECRET;
      const options = {
        expiresIn: "6s",
        issuer: "MbudaNjiraTechnologies.com",
        audience: UserId,
      };
      JWT.sign(payload, secret, options, (error, token) => {
        if (error) {
          console.log(error.message);
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  verifyAccessToken: (request, respond, next) => {
    if (!request.headers["authorization"])
      return next(createError.Unauthorized());
    const authHeader = request.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        if (err.name === "jsonWebTokenError") {
          return next(createError.Unauthorized("err.message"));
        } else {
          return next(createError.Unauthorized(err.message));
        }
      }
      request.payload = payload;
      next();
    });
  },
};
