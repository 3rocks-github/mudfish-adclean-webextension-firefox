
function mudfish_adclean_857e049525816b9d7cbf270616034c81() {
  try {
    Sizzle(`div[id][class*=" "][data-interval] div[style*="/data/apms/background"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_857e049525816b9d7cbf270616034c81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_857e049525816b9d7cbf270616034c81, function (items) {
  if (mudfish_adclean_g_conf_857e049525816b9d7cbf270616034c81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_857e049525816b9d7cbf270616034c81();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_857e049525816b9d7cbf270616034c81();
    });
  }
});
