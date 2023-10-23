
function mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f() {
  try {
    Sizzle(`#pnlContainer .con_b >.ct_box:not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_27aca48b984e0968e8f0ec864b4fcf9f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_27aca48b984e0968e8f0ec864b4fcf9f, function (items) {
  if (mudfish_adclean_g_conf_27aca48b984e0968e8f0ec864b4fcf9f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f();
    });
  }
});
