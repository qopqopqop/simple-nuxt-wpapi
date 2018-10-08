import wpApi from 'wpapi'

const options = <%= JSON.stringify(options.wpApi.options, null, 2) %>;

<% if (options.nodeCache.enabled) { %>

const hash = require('object-hash');
const NC = require("node-cache");
const cache = new NC(<%= JSON.stringify(options.nodeCache.options, null, 2) %>);

if (typeof options.transport['get'] === 'undefined') {

  options.transport['get'] = function (req, cb) {
    <% if (options.wpApi.debug) { %>

    console.log('[node-wpapi] GET ' + req);

    <% } %>
    let result = cache.get(hash(req));
    if (result) {
      if (cb && typeof cb === 'function') {
        cb(null, result);
      }
      return Promise.resolve(result);
    }
    return wpApi.transport.get(req, cb).then(function (result) {
      cache.set(hash(req), result);
      return result;
    });
  }
}
<% } %>

const wp = new wpApi(options)

export default function (ctx, inject) {
  ctx.$wp = wp
  inject('wp', wp)
}
