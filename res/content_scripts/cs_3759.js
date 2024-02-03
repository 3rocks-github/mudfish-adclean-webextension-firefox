
function mudfish_adclean_a6d3ebba0e6bb2124f0e30d6c3df5b50() {
  try {
    Sizzle(`div[id^="imgDiv"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a6d3ebba0e6bb2124f0e30d6c3df5b50 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a6d3ebba0e6bb2124f0e30d6c3df5b50, function (items) {
  if (mudfish_adclean_g_conf_a6d3ebba0e6bb2124f0e30d6c3df5b50.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a6d3ebba0e6bb2124f0e30d6c3df5b50();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a6d3ebba0e6bb2124f0e30d6c3df5b50();
    });
  }
});
