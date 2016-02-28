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
    window.sr = new scrollReveal();
    Site.fillBrowser();

    $('[data-behavior="scroll-to-two"]').on('click', function() {
      Site.scrollToEl('.two');
    });
  },

  scrollToEl: function(element) {
    $(element).velocity("scroll", { duration: 1000});
  },

  fillBrowser: function() {
    SiteWidth = $(window).width();
    SiteHeight = $(window).height();
    bigHeight = SiteHeight + 100;

    var module = $('.size');
    module.css('height', SiteHeight);
    // var moduleBig = $('.four');
    // module.css('height', bigHeight);
  },

  resizeWindow: function() {
    Site.fillBrowser();
  },
}
