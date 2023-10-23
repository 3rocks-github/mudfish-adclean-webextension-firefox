
function mudfish_adclean_e67ed05b56aa200f741a529553832aa4() {
  try {
    Sizzle(`.sponsor-logo-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e67ed05b56aa200f741a529553832aa4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e67ed05b56aa200f741a529553832aa4, function (items) {
  if (mudfish_adclean_g_conf_e67ed05b56aa200f741a529553832aa4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e67ed05b56aa200f741a529553832aa4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e67ed05b56aa200f741a529553832aa4();
    });
  }
});
