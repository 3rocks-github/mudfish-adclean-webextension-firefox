
function mudfish_adclean_c2e278c62f0eccfe30563d92e935dd9c() {
  try {
    Sizzle(`.list-webzine .list-item`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c2e278c62f0eccfe30563d92e935dd9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c2e278c62f0eccfe30563d92e935dd9c, function (items) {
  if (mudfish_adclean_g_conf_c2e278c62f0eccfe30563d92e935dd9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c2e278c62f0eccfe30563d92e935dd9c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c2e278c62f0eccfe30563d92e935dd9c();
    });
  }
});
