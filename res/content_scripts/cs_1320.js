
function mudfish_adclean_60b1a08ca16d46292115beeaef708bfd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article > div[id^="slot"] table[style^="margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_60b1a08ca16d46292115beeaef708bfd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_60b1a08ca16d46292115beeaef708bfd();
  });
}
