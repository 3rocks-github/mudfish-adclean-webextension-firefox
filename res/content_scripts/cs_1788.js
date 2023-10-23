
function mudfish_adclean_157a9ff70767b1b9475c77d0c056b710() {
  try {
    Sizzle(`div[id$="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_157a9ff70767b1b9475c77d0c056b710 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_157a9ff70767b1b9475c77d0c056b710, function (items) {
  if (mudfish_adclean_g_conf_157a9ff70767b1b9475c77d0c056b710.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_157a9ff70767b1b9475c77d0c056b710();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_157a9ff70767b1b9475c77d0c056b710();
    });
  }
});
