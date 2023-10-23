
function mudfish_adclean_5075709d44ce276f8e6ec722f123bea5() {
  try {
    Sizzle(`div[id^="banner_"] > a[target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5075709d44ce276f8e6ec722f123bea5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5075709d44ce276f8e6ec722f123bea5, function (items) {
  if (mudfish_adclean_g_conf_5075709d44ce276f8e6ec722f123bea5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5075709d44ce276f8e6ec722f123bea5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5075709d44ce276f8e6ec722f123bea5();
    });
  }
});
