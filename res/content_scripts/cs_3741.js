
function mudfish_adclean_06848360dced55effef81a5acb7b9f9f() {
  try {
    Sizzle(`.power-tit`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_06848360dced55effef81a5acb7b9f9f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_06848360dced55effef81a5acb7b9f9f, function (items) {
  if (mudfish_adclean_g_conf_06848360dced55effef81a5acb7b9f9f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_06848360dced55effef81a5acb7b9f9f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_06848360dced55effef81a5acb7b9f9f();
    });
  }
});
