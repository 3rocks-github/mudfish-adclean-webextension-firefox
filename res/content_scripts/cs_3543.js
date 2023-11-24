
function mudfish_adclean_bba3940652d17701484c7d0c7e6ef196() {
  try {
    Sizzle(`.la`).forEach(element => {
      element.style.height = "40px !important";
element.style.width = "40px !important";
element.style.visibility = "hidden !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bba3940652d17701484c7d0c7e6ef196 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bba3940652d17701484c7d0c7e6ef196, function (items) {
  if (mudfish_adclean_g_conf_bba3940652d17701484c7d0c7e6ef196.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bba3940652d17701484c7d0c7e6ef196();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bba3940652d17701484c7d0c7e6ef196();
    });
  }
});
