(function (tire) {

  if (tire.ajaxSettings.headers['X-Requested-With']) {
    delete tire.ajaxSettings.headers['X-Requested-With'];
  }

  /**
   * Extend `ajaxSettings`.
   */

  tire.extend(tire.ajaxSettings, {

    /**
     * Check for cross domain support before sending `xhr` request
     * Check for `XDomainRequest` if it's cross domain for older IE.
     *
     * @param {Object} xhr
     * @param {Object} options
     */

    beforeOpen: function (xhr, options) {
      var res;
      
      if (!options.crossDomain && (res = /^([\w\-]+:)?\/\/([^\/]+)/.exec(options.url)) !== null) {
        options.crossDomain = res[2] !== window.location.host;
      }

      if (options.crossDomain && !!window.XDomainRequest && !options.supportCORS) {
        var xdr = new window.XDomainRequest();
        xdr.open(options.type, options.url);
        xdr.onerror = options.error;
        xdr.ontimeout = options.error;
        xdr.onload = function (res) {
          return tire.ajaxSuccess(res, xdr, options);
        };
        xdr.send(tire.param(options.data) !== '' ? tire.param(options.data) : null);
        // returning false will prevent xhr to proceed
        return false;
      }

      if ('withCredentials' in options.xhrFields && options.supportCORS) {
        xhr.withCredentials = options.xhrFields.withCredentials;
      }

      return xhr;
    },

    // Is it cross domain or not?
    crossDomain: false,

    // Check for CORS support in `XMLHTTPRequest`.
    supportCORS: (function () {
      return window.XMLHttpRequest && ('withCredentials' in new XMLHttpRequest());
    }()),

    // Adding `xhrFields` object with `withCredentials` property.
    xhrFields: {
      withCredentials: false
    }
  });

}(window.tire));