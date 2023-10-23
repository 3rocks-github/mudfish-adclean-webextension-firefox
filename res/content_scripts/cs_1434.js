
function mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795() {
  try {
    Sizzle(`div[style=""] ~ div:not([style]):not([class]) table[width][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8d2ed80226be0fa2bc1c6efa16157795 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8d2ed80226be0fa2bc1c6efa16157795, function (items) {
  if (mudfish_adclean_g_conf_8d2ed80226be0fa2bc1c6efa16157795.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795();
    });
  }
});
