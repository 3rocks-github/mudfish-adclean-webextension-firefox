
function mudfish_adclean_2c3de37c56cc748574570589a4049ebd() {
  try {
    Sizzle(`iframe[src*="dt.co.kr/ad.html"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2c3de37c56cc748574570589a4049ebd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2c3de37c56cc748574570589a4049ebd, function (items) {
  if (mudfish_adclean_g_conf_2c3de37c56cc748574570589a4049ebd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2c3de37c56cc748574570589a4049ebd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2c3de37c56cc748574570589a4049ebd();
    });
  }
});
