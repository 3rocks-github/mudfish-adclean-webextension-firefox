
function mudfish_adclean_86993c14be1b265d85d0682176fcc7af() {
  try {
    Sizzle(`#bo_list + div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_86993c14be1b265d85d0682176fcc7af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_86993c14be1b265d85d0682176fcc7af, function (items) {
  if (mudfish_adclean_g_conf_86993c14be1b265d85d0682176fcc7af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_86993c14be1b265d85d0682176fcc7af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_86993c14be1b265d85d0682176fcc7af();
    });
  }
});
