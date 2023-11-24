
function mudfish_adclean_c96e7b7e5aae6e8551415e6cab334237() {
  try {
    Sizzle(`body > #bottom-sticky`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c96e7b7e5aae6e8551415e6cab334237 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c96e7b7e5aae6e8551415e6cab334237, function (items) {
  if (mudfish_adclean_g_conf_c96e7b7e5aae6e8551415e6cab334237.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c96e7b7e5aae6e8551415e6cab334237();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c96e7b7e5aae6e8551415e6cab334237();
    });
  }
});
