
function mudfish_adclean_554589d78425d77ad40655f74ecce56e() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_554589d78425d77ad40655f74ecce56e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_554589d78425d77ad40655f74ecce56e, function (items) {
  if (mudfish_adclean_g_conf_554589d78425d77ad40655f74ecce56e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_554589d78425d77ad40655f74ecce56e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_554589d78425d77ad40655f74ecce56e();
    });
  }
});
