
function mudfish_adclean_bcd32fef884cf9741a947fde9352c69a() {
  try {
    Sizzle(`a[href^="/adver-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bcd32fef884cf9741a947fde9352c69a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bcd32fef884cf9741a947fde9352c69a, function (items) {
  if (mudfish_adclean_g_conf_bcd32fef884cf9741a947fde9352c69a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bcd32fef884cf9741a947fde9352c69a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bcd32fef884cf9741a947fde9352c69a();
    });
  }
});
