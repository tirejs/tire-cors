# Tire CORS plugin

Brings CORS (Cross-origin resource sharing) support to Tire. Extends the [Ajax settings in Tire](http://tirejs.com/#ajax/ajax).

**Important:** Requires Tire 1.2.0 or newer.

### Basic Ajax options

* `type` HTTP request method. GET is default.
* `url` URL to which the request is made.
* `data` Data for the request. Non-string objects will get serialized with `$.param`
* `contentType` Which content type to post to server. Default is `application/x-www-form-urlencoded`.
* `dataType` Response type to expect from the server. Default is none. Can be `json, jsonp, xml, html, text`.
* `headers` Object of additional HTTP headers for the Ajax request.
* `success` The function to execute when the request is done with data as a argument.
* `error` The function to execute on error with error arguments.
* `timeout` Set a timeout in milliseconds for the request.
* `beforeOpen` Not supported with CORS.
* `beforeSend` Modify the xhr object before sending it. Return `false` to prevent the request from being sent. Default is `null`.

### Additional CORS options

* `crossDomain: true/false` Default is `false`.
* `xhrFields: { withCredentials: true/false }` Default is `false`.

### Example

```javascript
$(function () {
  $.ajax({
    type: 'GET',

    url: 'http://updates.html5rocks.com',

    contentType: 'text/plain',

    success: function (res) {
      $('body').html(res);
    },

    error: function () {
      $('body').html('<span style="color:red">Error loading HTML5Rocks!</span>');
    }
  });
});
```

### Gotchas

If a URL contains `callback=?`, `callback=string` or `dataType` is `jsonp` it will be a JSONP request. The response data will automatic be parsed as a JSON object if it's a JSONP or JSON request.

Don't use `beforeOpen` as it disables the CORS support.

## Disclaimer

**Support for CORS in IE8/9 is limited.** Please read the article [XDomainRequest - Restrictions, Limitations and Workarounds](https://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx?Redirected=true) carefully and comply to those limitations if you need to support those browsers.
