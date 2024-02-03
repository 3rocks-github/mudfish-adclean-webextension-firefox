
function mudfish_adclean_384e5aaeeba9e4c142309a3e9b3ad40e() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_384e5aaeeba9e4c142309a3e9b3ad40e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_384e5aaeeba9e4c142309a3e9b3ad40e, function (items) {
  if (mudfish_adclean_g_conf_384e5aaeeba9e4c142309a3e9b3ad40e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_384e5aaeeba9e4c142309a3e9b3ad40e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_384e5aaeeba9e4c142309a3e9b3ad40e();
    });
  }
});
