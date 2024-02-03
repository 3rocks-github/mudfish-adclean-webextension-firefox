
function mudfish_adclean_ccc14ec4c1efaf78242dc54b421ffaba() {
  try {
    Sizzle(`div[id^="read_ok_"] ~ li[id][style*="border-top-style:"] > div[class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ccc14ec4c1efaf78242dc54b421ffaba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ccc14ec4c1efaf78242dc54b421ffaba, function (items) {
  if (mudfish_adclean_g_conf_ccc14ec4c1efaf78242dc54b421ffaba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ccc14ec4c1efaf78242dc54b421ffaba();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ccc14ec4c1efaf78242dc54b421ffaba();
    });
  }
});
