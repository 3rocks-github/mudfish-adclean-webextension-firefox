
function mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a() {
  try {
    Sizzle(`div[id$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eaa0d3e5d8edc40da2e622be859d503a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eaa0d3e5d8edc40da2e622be859d503a, function (items) {
  if (mudfish_adclean_g_conf_eaa0d3e5d8edc40da2e622be859d503a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a();
    });
  }
});
