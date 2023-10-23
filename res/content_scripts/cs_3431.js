
function mudfish_adclean_326527152f6ed518ee1464e09de89704() {
  try {
    Sizzle(`div[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_326527152f6ed518ee1464e09de89704 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_326527152f6ed518ee1464e09de89704, function (items) {
  if (mudfish_adclean_g_conf_326527152f6ed518ee1464e09de89704.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_326527152f6ed518ee1464e09de89704();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_326527152f6ed518ee1464e09de89704();
    });
  }
});
