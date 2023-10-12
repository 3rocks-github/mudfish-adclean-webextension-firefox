
function mudfish_adclean_676774ff85f49823b7194e9ae7fda419() {
  try {
    Sizzle(`.wrap_home .section_spot`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_676774ff85f49823b7194e9ae7fda419 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_676774ff85f49823b7194e9ae7fda419, function (items) {
  if (mudfish_adclean_g_conf_676774ff85f49823b7194e9ae7fda419.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_676774ff85f49823b7194e9ae7fda419();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
