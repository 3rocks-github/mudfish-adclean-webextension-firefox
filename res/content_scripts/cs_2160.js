
function mudfish_adclean_fa288d683fdd622e88b2d0978f1461b5() {
  try {
    Sizzle(`a[href^="https://torrentmode.com/bbs/bannerhit.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fa288d683fdd622e88b2d0978f1461b5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fa288d683fdd622e88b2d0978f1461b5, function (items) {
  if (mudfish_adclean_g_conf_fa288d683fdd622e88b2d0978f1461b5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fa288d683fdd622e88b2d0978f1461b5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
