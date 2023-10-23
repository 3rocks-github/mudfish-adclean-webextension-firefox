
function mudfish_adclean_60b1a08ca16d46292115beeaef708bfd() {
  try {
    Sizzle(`#article > div[id^="slot"] table[style^="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_60b1a08ca16d46292115beeaef708bfd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_60b1a08ca16d46292115beeaef708bfd, function (items) {
  if (mudfish_adclean_g_conf_60b1a08ca16d46292115beeaef708bfd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_60b1a08ca16d46292115beeaef708bfd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_60b1a08ca16d46292115beeaef708bfd();
    });
  }
});
