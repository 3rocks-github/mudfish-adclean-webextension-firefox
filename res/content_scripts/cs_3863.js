
function mudfish_adclean_ddd1d430c4faad7eb4ae23fe243876ac() {
  try {
    Sizzle(`aside > div[class*=" "]:has(> img[class] ~ div[class]:contains(광고))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ddd1d430c4faad7eb4ae23fe243876ac = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ddd1d430c4faad7eb4ae23fe243876ac, function (items) {
  if (mudfish_adclean_g_conf_ddd1d430c4faad7eb4ae23fe243876ac.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ddd1d430c4faad7eb4ae23fe243876ac();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ddd1d430c4faad7eb4ae23fe243876ac();
    });
  }
});
