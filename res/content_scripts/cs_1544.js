
function mudfish_adclean_dc1ac84cd6b71406af0452b7207bf9ed() {
  try {
    Sizzle(`div[style].text-center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dc1ac84cd6b71406af0452b7207bf9ed = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dc1ac84cd6b71406af0452b7207bf9ed, function (items) {
  if (mudfish_adclean_g_conf_dc1ac84cd6b71406af0452b7207bf9ed.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dc1ac84cd6b71406af0452b7207bf9ed();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_dc1ac84cd6b71406af0452b7207bf9ed();
    });
  }
});
