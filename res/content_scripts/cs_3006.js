
function mudfish_adclean_b5589c359a14d1bd4ccd0bcc90022591() {
  try {
    Sizzle(`#yWelTopMid > .wConLT`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b5589c359a14d1bd4ccd0bcc90022591 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b5589c359a14d1bd4ccd0bcc90022591, function (items) {
  if (mudfish_adclean_g_conf_b5589c359a14d1bd4ccd0bcc90022591.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b5589c359a14d1bd4ccd0bcc90022591();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
