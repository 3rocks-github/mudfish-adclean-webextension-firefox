
function mudfish_adclean_0967f1bc21528cd0a355f3677d72e5d5() {
  try {
    Sizzle(`.section_list.hongbo`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0967f1bc21528cd0a355f3677d72e5d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0967f1bc21528cd0a355f3677d72e5d5, function (items) {
  if (mudfish_adclean_g_conf_0967f1bc21528cd0a355f3677d72e5d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0967f1bc21528cd0a355f3677d72e5d5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
