from setuptools import setup, find_packages

setup(
    name="streamlit-cookie-banner",
    version="0.1.0",
    author="Luke Bowes",
    author_email="luke.bowes@example.com",
    description="A custom Streamlit component to display a basic cookie banner",
    long_description=open('README.md').read(),
    long_description_content_type="text/markdown",
    url="https://github.com/bowespublishing/streamlit-cookie-banner",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "streamlit>=1.0",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
)
