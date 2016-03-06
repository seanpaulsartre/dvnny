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

    $('[data-behavior="scroll-to"]').on('click', function(el) {
      var el = $(this).attr('data-id');
      $(el).velocity("scroll", { duration: 1000});
    });
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
