
function mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e() {
  try {
    Sizzle(`div[id^="list_right_"] iframe[src*="/board/humor/list_right.html"] ~ div`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c51fe82196b8f2014afdacb6b9e2ee0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c51fe82196b8f2014afdacb6b9e2ee0e, function (items) {
  if (mudfish_adclean_g_conf_c51fe82196b8f2014afdacb6b9e2ee0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e();
    });
  }
});
