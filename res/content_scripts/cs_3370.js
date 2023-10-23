
function mudfish_adclean_47b4c305e6eec1d690a82fb05e921038() {
  try {
    Sizzle(`.hidden-obj ~ aside[class^="aside-box"].bg11`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_47b4c305e6eec1d690a82fb05e921038 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_47b4c305e6eec1d690a82fb05e921038, function (items) {
  if (mudfish_adclean_g_conf_47b4c305e6eec1d690a82fb05e921038.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_47b4c305e6eec1d690a82fb05e921038();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_47b4c305e6eec1d690a82fb05e921038();
    });
  }
});
