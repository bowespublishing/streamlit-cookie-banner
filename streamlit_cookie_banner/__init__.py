import os
import streamlit.components.v1 as components

# Define the path to the frontend files
component_dir = os.path.dirname(os.path.abspath(__file__))
frontend_path = os.path.join(component_dir, "frontend/public")

# Streamlit component for the cookie banner
def cookie_banner(banner_text="We use cookies to ensure you get the best experience.", display=True, link_text=None, link_url=None,key=None):
    # Pass the banner text and display flag to the frontend
    banner_html = components.declare_component("cookie_banner", path=frontend_path)
    
    # Render the component with dynamic text and display control
    consent = banner_html(
        banner_text=banner_text, 
        display=display,
        link_text=link_text, 
        link_url=link_url,
        key=key
    )
    
    
    return consent 
