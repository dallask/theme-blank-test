'use strict';

module.exports = simpleTwigExtension;

function simpleTwigExtension(Twig) {
  Twig.extendFunction("analytics", function(content) {
    return typeof content === 'object' ? {} : '';
  });

  Twig.extendFunction("test", function(content) {
    return typeof content === 'object' ? {} : '';
  });

  Twig.extendFilter("json_decode", function(content) {
    return JSON.parse(content);
  });

  Twig.extendFilter("defaultAlt", function(content, params) {
    if (content !== undefined || params.length === 0) {
      return content;
    }

    for (var i in params) {
      if (params[i] !== undefined) {
        return params[i];
      }
    }
  });

  Twig.extendFilter("mergeAlt", function(content, params) {
    if (content === undefined) {
      content = {};
    }

    if (params[0] === undefined) {
      return content;
    }

    return Twig.filters.merge(content, params);
  });
}
