
function mudfish_adclean_7209876cf2a8c0b2b78b14204aa14a9c() {
  try {
    Sizzle(`footer ~ div[style^="position:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7209876cf2a8c0b2b78b14204aa14a9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7209876cf2a8c0b2b78b14204aa14a9c, function (items) {
  if (mudfish_adclean_g_conf_7209876cf2a8c0b2b78b14204aa14a9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7209876cf2a8c0b2b78b14204aa14a9c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7209876cf2a8c0b2b78b14204aa14a9c();
    });
  }
});
