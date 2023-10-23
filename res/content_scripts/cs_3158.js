
function mudfish_adclean_7001a65e9fac117c3ad19652c57e1be8() {
  try {
    Sizzle(`.main-box ~ div[style*=" "] > div:not([style*=" "])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7001a65e9fac117c3ad19652c57e1be8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7001a65e9fac117c3ad19652c57e1be8, function (items) {
  if (mudfish_adclean_g_conf_7001a65e9fac117c3ad19652c57e1be8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7001a65e9fac117c3ad19652c57e1be8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7001a65e9fac117c3ad19652c57e1be8();
    });
  }
});
