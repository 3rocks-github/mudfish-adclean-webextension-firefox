
function mudfish_adclean_0d7bbdd058243f4aaf11763e563449e6() {
  try {
    Sizzle(`section[class*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0d7bbdd058243f4aaf11763e563449e6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0d7bbdd058243f4aaf11763e563449e6, function (items) {
  if (mudfish_adclean_g_conf_0d7bbdd058243f4aaf11763e563449e6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0d7bbdd058243f4aaf11763e563449e6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0d7bbdd058243f4aaf11763e563449e6();
    });
  }
});
