import os
import re

filepath = r"c:\Users\harsh\Desktop\machinga-nextjs\src\app\page.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace src="./assets/... " with src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/...`}
pattern = re.compile(r'src="\./assets/([^"]+)"')
replacement = r'src={`${process.env.NODE_ENV === \'production\' ? \'/machinga-nextjs\' : \'\'}/assets/\1`}'

new_content = pattern.sub(replacement, content)

if new_content != content:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")
else:
    print("No changes made.")
