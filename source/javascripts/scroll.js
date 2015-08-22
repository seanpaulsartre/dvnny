var ERW = {
  client: { height: 0, width: 0, scrollPosition: $(window).scrollTop() },
  debug: {
    enabled: true,
    log: function(message) {
      if (ERW.debug.enabled)  console.log('[DEBUG] ' + message);
    }
  },

   initialize: function() {
    ERW.debug.log('Initializing the application...');
    ERW.bind();
  },

  bind: function() {
    ERW.debug.log('Binding Main...');

    ERW.client.width = $(window).width();
    ERW.client.height = $(window).height();

    var throttledResize = _.throttle(ERW.resizeHandler, 50);
    $(window).resize(throttledResize);
    $(window).load(ERW.resizeHandler);
    var throttledScroll = _.throttle(ERW.scrollHandler, 50);
    $(window).scroll(ERW.scrollHandler);
  },

  resizeHandler: function() {
    var ERWWidth = $(window).width();
    var headerHeight = $('.global').outerHeight();
    var ERWHeight = $(window).height();
    var ERWHeightSmall = parseInt(ERWHeight - headerHeight);

    $('.one').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.two').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.three').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.four').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.five').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.six').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.seven').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.eight').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.nine').css({
      "height": ERWHeight, "width": ERWWidth
    });
    $('.ten').css({
      "height": ERWHeight, "width": ERWWidth
    });
  },


  scrollHandler: function() {

  },
}
