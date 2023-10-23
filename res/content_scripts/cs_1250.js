
function mudfish_adclean_89f8038421afd43ad0b7fef9cef321e1() {
  try {
    Sizzle(`header ~ container[class*="-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_89f8038421afd43ad0b7fef9cef321e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_89f8038421afd43ad0b7fef9cef321e1, function (items) {
  if (mudfish_adclean_g_conf_89f8038421afd43ad0b7fef9cef321e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_89f8038421afd43ad0b7fef9cef321e1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_89f8038421afd43ad0b7fef9cef321e1();
    });
  }
});
