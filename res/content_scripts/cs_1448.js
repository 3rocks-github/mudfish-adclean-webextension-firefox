
function mudfish_adclean_981052a97897913c7c35d9ba58d8f74f() {
  try {
    Sizzle(`[id][class] > div[style].panel-default`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_981052a97897913c7c35d9ba58d8f74f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_981052a97897913c7c35d9ba58d8f74f, function (items) {
  if (mudfish_adclean_g_conf_981052a97897913c7c35d9ba58d8f74f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_981052a97897913c7c35d9ba58d8f74f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_981052a97897913c7c35d9ba58d8f74f();
    });
  }
});
