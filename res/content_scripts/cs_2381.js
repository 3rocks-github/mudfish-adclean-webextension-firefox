
function mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article-info > h2`).forEach(element => {
        element.style.overflow = "visible !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b();
  });
}
