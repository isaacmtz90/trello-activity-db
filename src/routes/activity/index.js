
export function register(server, options, next) {
  const dispatch = (cmd) => new Promise((resolve) => {
    server.app.dispatcher.dispatch(cmd)
      .subscribe((response) => {
        resolve(response);
      });
  });
  server.route([
    {
      method: 'GET',
      path: '/activity',
      config: {
        auth: false,
        tags: ['api'],
        handler: (request, reply) => {
          reply(dispatch({ type: 'getAllActivity' }));
        },
      },
    }, {
      method: 'GET',
      path: '/history',
      config: {
        tags: ['api'],
        handler: (request, reply) => {
          reply(dispatch({ type: 'feedHistory' }));
        },
      },
    }, {
      method: 'POST',
      path: '/activity',
      config: {
        auth: false,
        tags: ['api'],
        handler: (request, reply) => {
          reply(dispatch({
            type: 'createActivity',
            activity: request,
          }));
        },
      },
    }]);
  next();
}

exports.register.attributes = require('./package.json');
