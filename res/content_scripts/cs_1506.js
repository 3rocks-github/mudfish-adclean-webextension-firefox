
function mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c() {
  try {
    Sizzle(`#primary-content > .magic-item-w`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5cce0fd4082e054a910ed084b7088b3c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5cce0fd4082e054a910ed084b7088b3c, function (items) {
  if (mudfish_adclean_g_conf_5cce0fd4082e054a910ed084b7088b3c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c();
    });
  }
});
