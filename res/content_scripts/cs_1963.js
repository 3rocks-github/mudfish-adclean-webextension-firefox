
function mudfish_adclean_03aaa5e48cde266e3cd71ba1aed7ef65() {
  try {
    Sizzle(`#posLeft > div[style~="width100%;font-size:"][style~="#ececec;margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_03aaa5e48cde266e3cd71ba1aed7ef65 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_03aaa5e48cde266e3cd71ba1aed7ef65, function (items) {
  if (mudfish_adclean_g_conf_03aaa5e48cde266e3cd71ba1aed7ef65.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_03aaa5e48cde266e3cd71ba1aed7ef65();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
