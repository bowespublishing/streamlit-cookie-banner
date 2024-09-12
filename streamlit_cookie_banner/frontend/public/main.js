let bannerKey = null;  // Global variable to hold the unique key

/**
 * Function to handle when the user clicks "Accept"
 */
function onAccept() {
  if (bannerKey) {
    localStorage.setItem(`cookieConsent_${bannerKey}`, "true");  // Store consent using the unique key
    hideBanner();  // Hide the banner immediately
    Streamlit.setComponentValue(true);  // Send `True` when the user accepts 
  }
}

/**
 * Function to handle when the user clicks "Reject"
 */
function onReject() {
  if (bannerKey) {
    localStorage.setItem(`cookieConsent_${bannerKey}`, "false");  // Store rejection using the unique key
    hideBanner();  // Hide the banner immediately
    Streamlit.setComponentValue(false);  // Send `False` when the user rejects cookies
  }
}

/**
 * Function to hide the banner and reset the frame height
 */
function hideBanner() {
  const bannerElement = document.getElementById("cookie-banner");
  bannerElement.style.display = "none";  // Hide the banner
  Streamlit.setFrameHeight(0);  // Reset the frame height
}

/**
 * The component's render function. This will be called immediately after
 * the component is initially loaded, and then again every time the
 * component gets new data from Python.
 */
function onRender(event) {
  const { banner_text, display, link_text, link_url, key } = event.detail.args;

  // Store the key globally so it's accessible in onAccept and onReject
  bannerKey = key;

  const bannerElement = document.getElementById("cookie-banner");

  // Check if consent is already stored in localStorage with the unique key
  const storedConsent = localStorage.getItem(`cookieConsent_${key}`);

  if (storedConsent !== null) {
    // If consent is stored, hide the banner and adjust frame height
    bannerElement.style.display = "none";
    Streamlit.setFrameHeight(0);
    return;  // Exit early, no need to render the banner again
  }

  // Only show the banner if display is true and no consent is stored
  if (display === false) {
    bannerElement.style.display = "none";
    Streamlit.setFrameHeight(0);
  } else {
    bannerElement.style.display = "block";
    const bannerTextElement = document.getElementById("banner-text");
    const bannerLinkElement = document.getElementById("banner-link");

    if (bannerTextElement) {
      bannerTextElement.innerText = banner_text;
    }

    // Handle the link display
    if (link_text && link_url) {
      bannerLinkElement.style.display = "inline";
      bannerLinkElement.innerText = link_text;
      bannerLinkElement.href = link_url;
    } else {
      bannerLinkElement.style.display = "none"; // Hide the link if not provided
    }

    const acceptBtn = document.getElementById("accept-cookie");
    const rejectBtn = document.getElementById("reject-cookie");

    acceptBtn.onclick = onAccept;
    rejectBtn.onclick = onReject;

    Streamlit.setFrameHeight(100);
  }
}

// Register the onRender function to the Streamlit render event
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
Streamlit.setComponentReady();
