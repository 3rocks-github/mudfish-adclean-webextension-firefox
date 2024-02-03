
function mudfish_adclean_fdf58ccc8e7f994b4ff1f0eb38038ecf() {
  try {
    Sizzle(`img[src^="https://nng-phinf.pstatic.net/"][src*="_naverads."]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fdf58ccc8e7f994b4ff1f0eb38038ecf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fdf58ccc8e7f994b4ff1f0eb38038ecf, function (items) {
  if (mudfish_adclean_g_conf_fdf58ccc8e7f994b4ff1f0eb38038ecf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fdf58ccc8e7f994b4ff1f0eb38038ecf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fdf58ccc8e7f994b4ff1f0eb38038ecf();
    });
  }
});
