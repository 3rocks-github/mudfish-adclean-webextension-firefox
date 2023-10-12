
function mudfish_adclean_9cefe76af7fbceacdb49ebaa8537af81() {
  try {
    Sizzle(`.keel-grid .col-list-body .resultsList div:not([class]):not([id]):has(div[class*="-promo-"] span[class$="-sponsored-text"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9cefe76af7fbceacdb49ebaa8537af81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9cefe76af7fbceacdb49ebaa8537af81, function (items) {
  if (mudfish_adclean_g_conf_9cefe76af7fbceacdb49ebaa8537af81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9cefe76af7fbceacdb49ebaa8537af81();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
