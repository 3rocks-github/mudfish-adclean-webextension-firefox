
function mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46() {
  try {
    Sizzle(`table.gall_list tr:not([data-type][data-no]):has(td:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c8f8c56d8a0b6194c033785551b1fe46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c8f8c56d8a0b6194c033785551b1fe46, function (items) {
  if (mudfish_adclean_g_conf_c8f8c56d8a0b6194c033785551b1fe46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46();
    });
  }
});
