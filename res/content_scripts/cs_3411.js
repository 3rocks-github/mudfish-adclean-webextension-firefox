
function mudfish_adclean_eab63c709fd82be22493a72b916e8fd8() {
  try {
    Sizzle(`.content_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eab63c709fd82be22493a72b916e8fd8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eab63c709fd82be22493a72b916e8fd8, function (items) {
  if (mudfish_adclean_g_conf_eab63c709fd82be22493a72b916e8fd8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eab63c709fd82be22493a72b916e8fd8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_eab63c709fd82be22493a72b916e8fd8();
    });
  }
});
