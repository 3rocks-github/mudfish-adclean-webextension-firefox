
function mudfish_adclean_55272c38bcebda55f7d4047c55dafc81() {
  try {
    Sizzle(`.nav_container > div[class^="content_"][class$="_list"] a[href^="/service/board"] ~ div[class^="list_center_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55272c38bcebda55f7d4047c55dafc81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55272c38bcebda55f7d4047c55dafc81, function (items) {
  if (mudfish_adclean_g_conf_55272c38bcebda55f7d4047c55dafc81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55272c38bcebda55f7d4047c55dafc81();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_55272c38bcebda55f7d4047c55dafc81();
    });
  }
});
