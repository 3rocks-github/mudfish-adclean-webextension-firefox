
function mudfish_adclean_6dabddd218d262cb46563c7494070171() {
  try {
    Sizzle(`#sidebar div[style^="height:"]:not(.li)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6dabddd218d262cb46563c7494070171 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6dabddd218d262cb46563c7494070171, function (items) {
  if (mudfish_adclean_g_conf_6dabddd218d262cb46563c7494070171.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6dabddd218d262cb46563c7494070171();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6dabddd218d262cb46563c7494070171();
    });
  }
});
