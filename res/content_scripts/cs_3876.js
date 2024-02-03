
function mudfish_adclean_d0801426c4c91a885e77a8dd96e1df48() {
  try {
    Sizzle(`.adsbygoogle-noablate`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d0801426c4c91a885e77a8dd96e1df48 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d0801426c4c91a885e77a8dd96e1df48, function (items) {
  if (mudfish_adclean_g_conf_d0801426c4c91a885e77a8dd96e1df48.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d0801426c4c91a885e77a8dd96e1df48();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d0801426c4c91a885e77a8dd96e1df48();
    });
  }
});
