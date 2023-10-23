
function mudfish_adclean_96c1ccc47a4235b96f4eb76bf080e79a() {
  try {
    Sizzle(`ins.kakao_ad_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96c1ccc47a4235b96f4eb76bf080e79a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96c1ccc47a4235b96f4eb76bf080e79a, function (items) {
  if (mudfish_adclean_g_conf_96c1ccc47a4235b96f4eb76bf080e79a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96c1ccc47a4235b96f4eb76bf080e79a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_96c1ccc47a4235b96f4eb76bf080e79a();
    });
  }
});
