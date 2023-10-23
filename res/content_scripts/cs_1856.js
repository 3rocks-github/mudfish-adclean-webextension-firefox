
function mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2() {
  try {
    Sizzle(`body .contents .container .topSub-nav`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_270a5d19c2ac67ce25f1d45fddbda0c2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_270a5d19c2ac67ce25f1d45fddbda0c2, function (items) {
  if (mudfish_adclean_g_conf_270a5d19c2ac67ce25f1d45fddbda0c2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2();
    });
  }
});
