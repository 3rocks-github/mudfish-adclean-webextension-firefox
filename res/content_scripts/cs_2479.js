
function mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab() {
  try {
    Sizzle(`div[style^="display:"]:has(div[style*="width:"] > div[id^="div-gpt-ad-"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ec4bf219f71b7ecb500eeca464a886ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ec4bf219f71b7ecb500eeca464a886ab, function (items) {
  if (mudfish_adclean_g_conf_ec4bf219f71b7ecb500eeca464a886ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab();
    });
  }
});
