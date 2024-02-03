
function mudfish_adclean_8de54b282c472fea647d01a5c89effcf() {
  try {
    Sizzle(`div.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8de54b282c472fea647d01a5c89effcf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8de54b282c472fea647d01a5c89effcf, function (items) {
  if (mudfish_adclean_g_conf_8de54b282c472fea647d01a5c89effcf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8de54b282c472fea647d01a5c89effcf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8de54b282c472fea647d01a5c89effcf();
    });
  }
});
