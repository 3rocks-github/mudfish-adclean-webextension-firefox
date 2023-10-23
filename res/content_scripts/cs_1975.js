
function mudfish_adclean_acba0b6b874d10ed3948e286deb9d09c() {
  try {
    Sizzle(`.widget-box.widget-img`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_acba0b6b874d10ed3948e286deb9d09c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_acba0b6b874d10ed3948e286deb9d09c, function (items) {
  if (mudfish_adclean_g_conf_acba0b6b874d10ed3948e286deb9d09c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_acba0b6b874d10ed3948e286deb9d09c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_acba0b6b874d10ed3948e286deb9d09c();
    });
  }
});
