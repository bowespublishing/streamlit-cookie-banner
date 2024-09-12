# Streamlit Cookie Banner Component

A custom Streamlit component to display a basic cookie banner on your Streamlit web application. This component allows you to display a cookie consent message with customizable text and an optional link to a privacy policy or other relevant information.

## Installation

You can install this component by adding it to your project and running the following command after packaging it:

    pip install streamlit-cookie-banner

## Usage
To use the cookie banner in your Streamlit app, you simply import the cookie_banner function from the component and use it within your Streamlit app like this:

    import streamlit as st
    from streamlit_cookie_banner import cookie_banner

    consent = cookie_banner(
        banner_text="We use cookies to ensure you get the best experience.",
        display=True,  # Set to False if you want to hide the banner
        link_text="Learn more",  # Optional: Link text (e.g., 'Learn more')
        link_url="https://your-privacy-policy-url.com",  # Optional: URL to your privacy policy
        key="cookie_banner"  # Optional: A unique key to control re-rendering
    )

    
## Use the consent

    import streamlit as st
    from streamlit_cookie_banner import cookie_banner
    
    consent = cookie_banner(
        banner_text="This website uses cookies to improve your experience.",
        display=True,
        link_text="Read our Privacy Policy",
        link_url="https://example.com/privacy-policy",
        key="cookie_banner"
    )
    
    if consent:
        st.write("Thank you for accepting cookies!")
    else:
        st.write("Please consider accepting cookies to improve your experience.")

Consent is returned as None if user hasn't selected Agree/Disagree, True for Agree & False for Disagree. After selection the value is stored in local session cookies to avoid showing the cookie bar again.
    
## Frontend Assets
The component uses frontend files located in the frontend/public directory. These files are responsible for rendering the banner in the browser. You can edit these to control the styling etc of the banner.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## Author
Luke Bowes

