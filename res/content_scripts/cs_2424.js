
function mudfish_adclean_9d346d4eefd1e2f5a6975f29ae573d15() {
  try {
    Sizzle(`.section_h3 > div:has(~ .m01_arl46)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d346d4eefd1e2f5a6975f29ae573d15 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d346d4eefd1e2f5a6975f29ae573d15, function (items) {
  if (mudfish_adclean_g_conf_9d346d4eefd1e2f5a6975f29ae573d15.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d346d4eefd1e2f5a6975f29ae573d15();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d346d4eefd1e2f5a6975f29ae573d15();
    });
  }
});
