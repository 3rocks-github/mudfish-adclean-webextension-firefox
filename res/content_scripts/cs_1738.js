
function mudfish_adclean_16769d941eada7a79b2c8eab7c671e9c() {
  try {
    Sizzle(`a[onclick^="go_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_16769d941eada7a79b2c8eab7c671e9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_16769d941eada7a79b2c8eab7c671e9c, function (items) {
  if (mudfish_adclean_g_conf_16769d941eada7a79b2c8eab7c671e9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_16769d941eada7a79b2c8eab7c671e9c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_16769d941eada7a79b2c8eab7c671e9c();
    });
  }
});
