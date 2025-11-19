
import re

file_path = r"c:\Users\ibrahim laptops\Desktop\projects\property-trend\src\components\ui\Hero.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    for char in line:
        if ord(char) > 127:
            print(f"Line {i+1}: Found non-ASCII char '{char}' (code {ord(char)}) in: {line.strip()}")
