
function mudfish_adclean_dec0eddac85882323f1a238c50dd674b() {
  try {
    Sizzle(`a[href^="http"][target="_blank"].thumbnail`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dec0eddac85882323f1a238c50dd674b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dec0eddac85882323f1a238c50dd674b, function (items) {
  if (mudfish_adclean_g_conf_dec0eddac85882323f1a238c50dd674b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dec0eddac85882323f1a238c50dd674b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_dec0eddac85882323f1a238c50dd674b();
    });
  }
});
