'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, response, next) {
    // do some checks
    // return error object if not satisfied
    // else call next()

    console.log('auth middleware called');
    // return response.send({ data: 'Auth middleware' });
    // return this.next({error: '500'});

    return next();
  }
}

module.exports = Auth;
