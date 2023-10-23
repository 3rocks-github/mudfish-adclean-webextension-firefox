
function mudfish_adclean_967184f3460dcec7db6d92e3b372e38c() {
  try {
    Sizzle(`#content-header form.FormItem`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_967184f3460dcec7db6d92e3b372e38c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_967184f3460dcec7db6d92e3b372e38c, function (items) {
  if (mudfish_adclean_g_conf_967184f3460dcec7db6d92e3b372e38c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_967184f3460dcec7db6d92e3b372e38c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_967184f3460dcec7db6d92e3b372e38c();
    });
  }
});
