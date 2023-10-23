
function mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52() {
  try {
    Sizzle(`.ggb-bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b6513a0255e4c9094ff72ce63bbc0e52 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b6513a0255e4c9094ff72ce63bbc0e52, function (items) {
  if (mudfish_adclean_g_conf_b6513a0255e4c9094ff72ce63bbc0e52.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52();
    });
  }
});
