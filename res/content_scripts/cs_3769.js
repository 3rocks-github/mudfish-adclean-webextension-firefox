
function mudfish_adclean_a09b17f0c369ff3fad321dabbe39a1da() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a09b17f0c369ff3fad321dabbe39a1da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a09b17f0c369ff3fad321dabbe39a1da, function (items) {
  if (mudfish_adclean_g_conf_a09b17f0c369ff3fad321dabbe39a1da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a09b17f0c369ff3fad321dabbe39a1da();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a09b17f0c369ff3fad321dabbe39a1da();
    });
  }
});
