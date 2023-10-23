
function mudfish_adclean_618742250dc28e0d0d54024df913652c() {
  try {
    Sizzle(`li[class$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_618742250dc28e0d0d54024df913652c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_618742250dc28e0d0d54024df913652c, function (items) {
  if (mudfish_adclean_g_conf_618742250dc28e0d0d54024df913652c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_618742250dc28e0d0d54024df913652c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_618742250dc28e0d0d54024df913652c();
    });
  }
});
