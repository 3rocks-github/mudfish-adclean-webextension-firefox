
function mudfish_adclean_2d0e8954843a9c418a6f096f2e134795() {
  try {
    Sizzle(`a[href^="/Tracks/Banner-Log/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d0e8954843a9c418a6f096f2e134795 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d0e8954843a9c418a6f096f2e134795, function (items) {
  if (mudfish_adclean_g_conf_2d0e8954843a9c418a6f096f2e134795.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d0e8954843a9c418a6f096f2e134795();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2d0e8954843a9c418a6f096f2e134795();
    });
  }
});
