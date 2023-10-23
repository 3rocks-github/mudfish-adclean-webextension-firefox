
function mudfish_adclean_167c9b2cb11d8420ec181f27009b226f() {
  try {
    Sizzle(`.left_con_last`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_167c9b2cb11d8420ec181f27009b226f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_167c9b2cb11d8420ec181f27009b226f, function (items) {
  if (mudfish_adclean_g_conf_167c9b2cb11d8420ec181f27009b226f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_167c9b2cb11d8420ec181f27009b226f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_167c9b2cb11d8420ec181f27009b226f();
    });
  }
});
