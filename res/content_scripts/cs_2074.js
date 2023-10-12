
function mudfish_adclean_b4e13a0797d495022a396b92c4cb05d8() {
  try {
    Sizzle(`tbody > tr[id^="page_show_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b4e13a0797d495022a396b92c4cb05d8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b4e13a0797d495022a396b92c4cb05d8, function (items) {
  if (mudfish_adclean_g_conf_b4e13a0797d495022a396b92c4cb05d8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b4e13a0797d495022a396b92c4cb05d8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
