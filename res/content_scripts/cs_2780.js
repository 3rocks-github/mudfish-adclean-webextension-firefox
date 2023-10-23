
function mudfish_adclean_d3668cdae4e43127c3e9893e452b6607() {
  try {
    Sizzle(`#home-sidebar >  a[target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3668cdae4e43127c3e9893e452b6607 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3668cdae4e43127c3e9893e452b6607, function (items) {
  if (mudfish_adclean_g_conf_d3668cdae4e43127c3e9893e452b6607.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3668cdae4e43127c3e9893e452b6607();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d3668cdae4e43127c3e9893e452b6607();
    });
  }
});
