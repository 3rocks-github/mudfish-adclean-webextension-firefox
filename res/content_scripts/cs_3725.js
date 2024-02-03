
function mudfish_adclean_abcf31dbd1527ddfdcbe4f05efce4089() {
  try {
    Sizzle(`div[id^="fmad_"] + div[style^="height:"][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_abcf31dbd1527ddfdcbe4f05efce4089 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_abcf31dbd1527ddfdcbe4f05efce4089, function (items) {
  if (mudfish_adclean_g_conf_abcf31dbd1527ddfdcbe4f05efce4089.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_abcf31dbd1527ddfdcbe4f05efce4089();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_abcf31dbd1527ddfdcbe4f05efce4089();
    });
  }
});
