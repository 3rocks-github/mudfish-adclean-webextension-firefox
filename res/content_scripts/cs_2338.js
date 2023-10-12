
function mudfish_adclean_f20082f90d6cef9421c55d37d33d3d7a() {
  try {
    Sizzle(`div[style].row.no-gutters > .col-6`).forEach(element => {
      element.style.maxWidth = "75% !important";
element.style.flexBasis = "75% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f20082f90d6cef9421c55d37d33d3d7a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f20082f90d6cef9421c55d37d33d3d7a, function (items) {
  if (mudfish_adclean_g_conf_f20082f90d6cef9421c55d37d33d3d7a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f20082f90d6cef9421c55d37d33d3d7a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
