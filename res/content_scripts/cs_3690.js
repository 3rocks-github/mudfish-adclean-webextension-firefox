
function mudfish_adclean_3826e3dd90e37530c8c01977bf645ad6() {
  try {
    Sizzle(`div[id^="danawa-dpg-"][id*="-dable"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3826e3dd90e37530c8c01977bf645ad6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3826e3dd90e37530c8c01977bf645ad6, function (items) {
  if (mudfish_adclean_g_conf_3826e3dd90e37530c8c01977bf645ad6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3826e3dd90e37530c8c01977bf645ad6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3826e3dd90e37530c8c01977bf645ad6();
    });
  }
});
