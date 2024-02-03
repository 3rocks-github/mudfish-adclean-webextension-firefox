
function mudfish_adclean_92018db3aabfa214142cd256ce0efe1f() {
  try {
    Sizzle(`.box__banner-single > .box__inner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_92018db3aabfa214142cd256ce0efe1f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_92018db3aabfa214142cd256ce0efe1f, function (items) {
  if (mudfish_adclean_g_conf_92018db3aabfa214142cd256ce0efe1f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_92018db3aabfa214142cd256ce0efe1f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_92018db3aabfa214142cd256ce0efe1f();
    });
  }
});
