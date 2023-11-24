
function mudfish_adclean_8f82210aa9726b15472332da003e485b() {
  try {
    Sizzle(`#main > div[class*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f82210aa9726b15472332da003e485b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f82210aa9726b15472332da003e485b, function (items) {
  if (mudfish_adclean_g_conf_8f82210aa9726b15472332da003e485b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f82210aa9726b15472332da003e485b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8f82210aa9726b15472332da003e485b();
    });
  }
});
