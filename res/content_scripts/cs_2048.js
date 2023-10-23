
function mudfish_adclean_cacc7f08f30d0b141ded3296f6a6a89b() {
  try {
    Sizzle(`div[class*="slider-banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cacc7f08f30d0b141ded3296f6a6a89b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cacc7f08f30d0b141ded3296f6a6a89b, function (items) {
  if (mudfish_adclean_g_conf_cacc7f08f30d0b141ded3296f6a6a89b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cacc7f08f30d0b141ded3296f6a6a89b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cacc7f08f30d0b141ded3296f6a6a89b();
    });
  }
});
