
function mudfish_adclean_14786f4a3620eccacef6fdddebe101ce() {
  try {
    Sizzle(`div[class$="adPos"][class^="listStyle"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_14786f4a3620eccacef6fdddebe101ce = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_14786f4a3620eccacef6fdddebe101ce, function (items) {
  if (mudfish_adclean_g_conf_14786f4a3620eccacef6fdddebe101ce.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_14786f4a3620eccacef6fdddebe101ce();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_14786f4a3620eccacef6fdddebe101ce();
    });
  }
});
