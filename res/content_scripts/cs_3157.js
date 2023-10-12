
function mudfish_adclean_642d7c8eaff079b556451da063a15124() {
  try {
    Sizzle(`#popups`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_642d7c8eaff079b556451da063a15124 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_642d7c8eaff079b556451da063a15124, function (items) {
  if (mudfish_adclean_g_conf_642d7c8eaff079b556451da063a15124.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_642d7c8eaff079b556451da063a15124();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
