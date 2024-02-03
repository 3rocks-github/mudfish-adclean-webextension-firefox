
function mudfish_adclean_c5bfb9e1b162812da92f1965ee9900df() {
  try {
    Sizzle(`div[id$="_boom_boom_wrap"][class*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5bfb9e1b162812da92f1965ee9900df = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5bfb9e1b162812da92f1965ee9900df, function (items) {
  if (mudfish_adclean_g_conf_c5bfb9e1b162812da92f1965ee9900df.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5bfb9e1b162812da92f1965ee9900df();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c5bfb9e1b162812da92f1965ee9900df();
    });
  }
});
