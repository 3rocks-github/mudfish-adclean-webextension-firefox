
function mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a() {
  try {
    Sizzle(`div[style*=" "]#showtoday`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6e46a37b17f8309af3c36b29513ed53a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6e46a37b17f8309af3c36b29513ed53a, function (items) {
  if (mudfish_adclean_g_conf_6e46a37b17f8309af3c36b29513ed53a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a();
    });
  }
});
