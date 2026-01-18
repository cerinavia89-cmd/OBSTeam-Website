// Enables sitewide translation to Español using Google Translate Element.
// Clicking the header "Español" link sets the Google Translate cookie so the
// language preference persists across pages on the site.
(function () {
  function setCookie(name, value, days, domain) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    var domainPart = domain ? '; domain=' + domain : '';
    document.cookie = name + '=' + value + expires + '; path=/' + domainPart;
  }

  function setLanguage(lang) {
    // Google Translate cookie format: /<source>/<target>
    var value = '/en/' + lang;

    // Set cookie for current host and (when possible) without subdomain.
    setCookie('googtrans', value, 365);
    setCookie('googtrans', value, 365, window.location.hostname);

    // If hostname has subdomain(s), also try root domain cookie.
    var parts = window.location.hostname.split('.');
    if (parts.length > 2) {
      var root = parts.slice(parts.length - 2).join('.');
      setCookie('googtrans', value, 365, '.' + root);
      setCookie('googtrans', value, 365, root);
    }

    window.location.reload();
  }

  function ensureTranslateElement() {
    if (!document.getElementById('google_translate_element')) {
      var el = document.createElement('div');
      el.id = 'google_translate_element';
      // Keep the widget off-screen (translation still works).
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.style.top = '-9999px';
      document.body.appendChild(el);
    }
  }

  function loadGoogleTranslate() {
    if (document.getElementById('google-translate-script')) return;

    // Must be global for the Google script callback.
    window.googleTranslateElementInit = function () {
      if (!window.google || !google.translate || !google.translate.TranslateElement) return;
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es',
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    var s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.head.appendChild(s);
  }

  function wireHeaderLink() {
    var link = document.getElementById('translate-es');
    if (!link) return;

    // Keep appearance unchanged; only change behavior.
    link.setAttribute('href', '#');
    link.setAttribute('aria-label', 'Translate site to Español');

    link.addEventListener('click', function (e) {
      e.preventDefault();
      setLanguage('es');
    });
  }

  function init() {
    ensureTranslateElement();
    loadGoogleTranslate();
    wireHeaderLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
