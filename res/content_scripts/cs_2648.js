
function mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617() {
  try {
    Sizzle(`.ad_bottom`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_98a82d8cfdb01b139e2c1dba008cd617 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_98a82d8cfdb01b139e2c1dba008cd617, function (items) {
  if (mudfish_adclean_g_conf_98a82d8cfdb01b139e2c1dba008cd617.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617();
    });
  }
});
