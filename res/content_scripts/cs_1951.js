
function mudfish_adclean_59b63451e982733c7965b6ab49f02db2() {
  try {
    Sizzle(`[class$="_dable"][id^="boxshow_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_59b63451e982733c7965b6ab49f02db2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_59b63451e982733c7965b6ab49f02db2, function (items) {
  if (mudfish_adclean_g_conf_59b63451e982733c7965b6ab49f02db2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_59b63451e982733c7965b6ab49f02db2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
