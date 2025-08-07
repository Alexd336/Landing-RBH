#!/usr/bin/env python3
"""
A simple JavaScript minifier used to remove comments, unnecessary whitespace
and newlines from the project's JS files. This script is not intended to
replicate complex minification behaviours but provides a basic reduction in
size to improve load times.

Usage:
    python3 minify_js.py
The script will read each .js file in the current directory, create a
corresponding .min.js file and write the minified content to it.

This file should not be imported or executed from within a browser; it
exists solely to pre‑process assets during the build or deployment.
"""
import re
import os

def minify_js(js_text: str) -> str:
    """Minify JavaScript by removing comments and unnecessary whitespace."""
    # Remove multiline comments (/* ... */)
    js_text = re.sub(r"/\*[^*]*\*+(?:[^/*][^*]*\*+)*/", "", js_text, flags=re.S)
    # Remove single line comments (//...)
    js_text = re.sub(r"//.*", "", js_text)
    # Remove newlines and excess whitespace
    js_text = re.sub(r"\s+", " ", js_text)
    # Collapse spaces around punctuation
    js_text = re.sub(r"\s*([{};,:])\s*", r"\1", js_text)
    return js_text.strip()


def main():
    base_dir = os.path.dirname(__file__)
    for fname in os.listdir(base_dir):
        if fname.endswith('.js') and not fname.endswith('.min.js') and fname != os.path.basename(__file__):
            src_path = os.path.join(base_dir, fname)
            dst_path = src_path.replace('.js', '.min.js')
            with open(src_path, 'r', encoding='utf-8') as f:
                original = f.read()
            minified = minify_js(original)
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(minified)
            print(f"Minified {fname} -> {os.path.basename(dst_path)}")


if __name__ == '__main__':
    main()