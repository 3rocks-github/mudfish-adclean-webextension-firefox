
function mudfish_adclean_f1b2726ac9ce4e8826548f171227908f() {
  try {
    Sizzle(`#r_aside > center > .bn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f1b2726ac9ce4e8826548f171227908f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f1b2726ac9ce4e8826548f171227908f, function (items) {
  if (mudfish_adclean_g_conf_f1b2726ac9ce4e8826548f171227908f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f1b2726ac9ce4e8826548f171227908f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f1b2726ac9ce4e8826548f171227908f();
    });
  }
});
