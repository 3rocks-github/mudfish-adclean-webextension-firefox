
function mudfish_adclean_84007046fefd807ec804c299db114ba7() {
  try {
    Sizzle(`img[src^="/image/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84007046fefd807ec804c299db114ba7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84007046fefd807ec804c299db114ba7, function (items) {
  if (mudfish_adclean_g_conf_84007046fefd807ec804c299db114ba7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84007046fefd807ec804c299db114ba7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_84007046fefd807ec804c299db114ba7();
    });
  }
});
