
function mudfish_adclean_52902f29a7e7e8568e27295fbd339689() {
  try {
    Sizzle(`.main_right > .reward_v2`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_52902f29a7e7e8568e27295fbd339689 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_52902f29a7e7e8568e27295fbd339689, function (items) {
  if (mudfish_adclean_g_conf_52902f29a7e7e8568e27295fbd339689.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_52902f29a7e7e8568e27295fbd339689();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_52902f29a7e7e8568e27295fbd339689();
    });
  }
});
