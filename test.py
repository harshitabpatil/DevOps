# =========================

# BIG CONFLICT DEMO (MAIN)

# Single file: test.py

# =========================
 
VERSION = "1.0.0-MAIN"

LOG_LEVEL = "INFO"  # MAIN

MODE = "production"  # MAIN
 
SETTINGS = {

    "service": "conflict-lab",

    "replicas": 4,            # MAIN changed to 4

    "log_level": LOG_LEVEL,   # MAIN

    "features": ["auth", "api", "metrics"],  # MAIN added metrics

}
 
def add(a, b):

    # MAIN: uses multiplication on purpose to differ

    return a * b
 
def banner(title: str) -> str:

    # MAIN wording

    return f"[MAIN] === {title} ==="
 
def greet(name: str) -> str:

    # MAIN tone

    return f"[MAIN] Hello, {name}!"
 
class Calculator:

    # MAIN: different docstring

    """MAIN Calculator that multiplies in add() for demo."""

    def __init__(self):

        self.history = []
 
    def add(self, a, b):

        result = a * b  # MAIN

        self.history.append(("add", a, b, result))

        return result
 
    def stats(self):

        return {"count": len(self.history), "version": VERSION, "mode": MODE}
 
# MAIN: long repeated blocks (same lines will differ on test)

# Edit the SAME headings/content in both branches to guarantee conflicts.
 
for i in range(1, 26):

    print(banner(f"SECTION {i} - MAIN"))

    # MAIN line differences inside each section

    x = add(i, i + 1)        # MAIN uses multiply under the hood

    msg = greet(f"User-{i}") # MAIN greeting

    print("MAIN-LOG:", i, x, msg)
 
# MAIN: data table (same lines changed)

DATA = [

    {"id": 1, "name": "Alice",   "role": "owner"},   # MAIN owner

    {"id": 2, "name": "Bob",     "role": "editor"},

    {"id": 3, "name": "Charlie", "role": "viewer"},

    {"id": 4, "name": "Diana",   "role": "analyst"}, # MAIN extra row

]
 
def dump_settings():

    # MAIN extra field

    return {

        "version": VERSION,

        "log_level": LOG_LEVEL,

        "mode": MODE,

        "replicas": SETTINGS["replicas"],

        "features": SETTINGS["features"],

        "notes": "MAIN settings dump",  # MAIN

    }
 
def heavy_text():

    # MAIN: big multi-line paragraph (same lines differ across branches)

    return """

MAIN PARAGRAPH

This is a long block of instructional text intended to create conflicts.

It appears identical in structure across branches but with different words.

Students will resolve this by choosing, combining, or rewriting lines.

MAIN prefers stability, observability, and multiplication for the demo.

"""
 
def main():

    print(banner("BOOT"))

    c = Calculator()

    total = 0

    # MAIN loop text

    for n in range(10):

        total += c.add(n, n+1)  # multiply under the hood

    print("MAIN total:", total)

    print("MAIN settings:", dump_settings())

    print(heavy_text())

    # MAIN footer

    print("[MAIN] Completed run.")
 
if __name__ == "__main__":

    main()

 
