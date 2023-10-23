
function mudfish_adclean_5b80822eca7bae3a702aa3cd44d6e7e5() {
  try {
    Sizzle(`div[class*="_outline"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b80822eca7bae3a702aa3cd44d6e7e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b80822eca7bae3a702aa3cd44d6e7e5, function (items) {
  if (mudfish_adclean_g_conf_5b80822eca7bae3a702aa3cd44d6e7e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b80822eca7bae3a702aa3cd44d6e7e5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5b80822eca7bae3a702aa3cd44d6e7e5();
    });
  }
});
