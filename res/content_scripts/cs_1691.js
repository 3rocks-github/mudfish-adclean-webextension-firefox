
function mudfish_adclean_02641aea3643237f86c2d54de05541df() {
  try {
    Sizzle(`#r_aside center > div[class="bn"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_02641aea3643237f86c2d54de05541df = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_02641aea3643237f86c2d54de05541df, function (items) {
  if (mudfish_adclean_g_conf_02641aea3643237f86c2d54de05541df.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_02641aea3643237f86c2d54de05541df();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_02641aea3643237f86c2d54de05541df();
    });
  }
});
