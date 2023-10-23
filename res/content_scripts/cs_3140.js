
function mudfish_adclean_951c91766514e1a364f140280ed63579() {
  try {
    Sizzle(`div[id*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_951c91766514e1a364f140280ed63579 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_951c91766514e1a364f140280ed63579, function (items) {
  if (mudfish_adclean_g_conf_951c91766514e1a364f140280ed63579.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_951c91766514e1a364f140280ed63579();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_951c91766514e1a364f140280ed63579();
    });
  }
});
