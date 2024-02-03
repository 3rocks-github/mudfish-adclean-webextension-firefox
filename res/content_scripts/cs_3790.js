
function mudfish_adclean_4cd76854fd610a60d70d96068870c5b0() {
  try {
    Sizzle(`div[class*="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4cd76854fd610a60d70d96068870c5b0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4cd76854fd610a60d70d96068870c5b0, function (items) {
  if (mudfish_adclean_g_conf_4cd76854fd610a60d70d96068870c5b0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4cd76854fd610a60d70d96068870c5b0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4cd76854fd610a60d70d96068870c5b0();
    });
  }
});
