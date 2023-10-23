
function mudfish_adclean_658d72c92e30e49836c801f116c6fbe8() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_658d72c92e30e49836c801f116c6fbe8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_658d72c92e30e49836c801f116c6fbe8, function (items) {
  if (mudfish_adclean_g_conf_658d72c92e30e49836c801f116c6fbe8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_658d72c92e30e49836c801f116c6fbe8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_658d72c92e30e49836c801f116c6fbe8();
    });
  }
});
