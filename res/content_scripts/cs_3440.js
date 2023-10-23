
function mudfish_adclean_09d620453bb0726248597915c1afc992() {
  try {
    Sizzle(`div[data-adsbygoogle-status="done"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09d620453bb0726248597915c1afc992 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09d620453bb0726248597915c1afc992, function (items) {
  if (mudfish_adclean_g_conf_09d620453bb0726248597915c1afc992.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09d620453bb0726248597915c1afc992();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_09d620453bb0726248597915c1afc992();
    });
  }
});
