
function mudfish_adclean_bb8eb636990b01ebf123df967192324c() {
  try {
    Sizzle(`div[id^="adMall_popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb8eb636990b01ebf123df967192324c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb8eb636990b01ebf123df967192324c, function (items) {
  if (mudfish_adclean_g_conf_bb8eb636990b01ebf123df967192324c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb8eb636990b01ebf123df967192324c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
