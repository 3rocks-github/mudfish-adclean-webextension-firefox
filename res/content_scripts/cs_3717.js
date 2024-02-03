
function mudfish_adclean_19980759b1c407391f33dbb43cba1eb2() {
  try {
    Sizzle(`.modal > #pop_modal`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_19980759b1c407391f33dbb43cba1eb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_19980759b1c407391f33dbb43cba1eb2, function (items) {
  if (mudfish_adclean_g_conf_19980759b1c407391f33dbb43cba1eb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_19980759b1c407391f33dbb43cba1eb2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_19980759b1c407391f33dbb43cba1eb2();
    });
  }
});
