var Site = {
   client: { height: 0, width: 0, scrollPosition: $(window).scrollTop() },
   initialize: function() {
    Site.bind();
  },

  bind: function() {
    $(window).on('load', function() {
      $("#preload").velocity('fadeOut', { duration: 1000 });
    });
    SiteWidth = $(window).width();
    SiteHeight = $(window).height();
    $(window).resize(Site.resizeWindow);

    Site.fillBrowser();

    $('[data-behavior="scroll-to"]').on('click', function(el) {
      var el = $(this).attr('data-id');
      $(el).velocity("scroll", { duration: 1000});
    });

    $window = $(window);
    $('[data-type="position"]').each(function(){
      var $scroll = $(this);
       $(window).scroll(function() {
         var pos = -($window.scrollTop() / $scroll.data('speed'));
         var oneHeight = $('.size').height() - 200;
         var offsetTop = oneHeight + pos + 'px';
         $scroll.css({ top: offsetTop });
       });
    });

    var expires = new Date();
    expires.setSeconds(expires.getSeconds() + 193212890);
    var counter = setInterval(timer, 1);

    function timer() {
      var timeDiff = expires - new Date();
      if (timeDiff <= 0) {
        clearInterval(counter);
        document.getElementById("timer").innerHTML = "00:00";
        return;
      }

      var minutes = new Date(timeDiff).getMinutes();
      var seconds = new Date(timeDiff).getSeconds();
      var milliSeconds = (new Date(timeDiff).getMilliseconds()/10).toFixed(0);
      var minutes = minutes < 10 ? "0" + minutes: minutes;
      var seconds = seconds < 10 ? "0" + seconds: seconds;
      var milliSeconds = milliSeconds < 10 ? "0" + milliSeconds: milliSeconds;
      var distance = seconds * 100000;
      var hoursLeft = minutes * 49040;

      document.getElementById("timer").innerHTML = minutes + ":" + seconds + ":" + milliSeconds;
      document.getElementById("distance").innerHTML = distance;
      document.getElementById("hours").innerHTML = "000000" + hoursLeft;
    }
  },

  fillBrowser: function() {
    SiteWidth = $(window).width();
    SiteHeight = $(window).height();
    bigHeight = SiteHeight + 100;

    var module = $('.size');
    module.css('height', SiteHeight);
  },

  resizeWindow: function() {
    Site.fillBrowser();
  },
}
