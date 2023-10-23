
function mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0() {
  try {
    Sizzle(`div[data-controller="font"] > .hidden`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a13d03d843d1d13c4cb3bd447c0f4f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a13d03d843d1d13c4cb3bd447c0f4f0, function (items) {
  if (mudfish_adclean_g_conf_1a13d03d843d1d13c4cb3bd447c0f4f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0();
    });
  }
});
