
function mudfish_adclean_9cefe76af7fbceacdb49ebaa8537af81() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.keel-grid .col-list-body .resultsList div:not([class]):not([id]):has(div[class*="-promo-"] span[class$="-sponsored-text"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9cefe76af7fbceacdb49ebaa8537af81();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9cefe76af7fbceacdb49ebaa8537af81();
  });
}
