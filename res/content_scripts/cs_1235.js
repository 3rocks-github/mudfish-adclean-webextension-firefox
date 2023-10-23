
function mudfish_adclean_d46901ade27df0aaa6639fa68d60804e() {
  try {
    Sizzle(`#contain > div[style*="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d46901ade27df0aaa6639fa68d60804e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d46901ade27df0aaa6639fa68d60804e, function (items) {
  if (mudfish_adclean_g_conf_d46901ade27df0aaa6639fa68d60804e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d46901ade27df0aaa6639fa68d60804e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d46901ade27df0aaa6639fa68d60804e();
    });
  }
});
