
function mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610() {
  try {
    Sizzle(`a[href^="https://ads.orbi.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_81bfe47ce22d5c60d4521c68cb95f610 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_81bfe47ce22d5c60d4521c68cb95f610, function (items) {
  if (mudfish_adclean_g_conf_81bfe47ce22d5c60d4521c68cb95f610.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610();
    });
  }
});
