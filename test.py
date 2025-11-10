# =========================

# BIG CONFLICT DEMO (MAIN)

# Single file: test.py

# =========================
 
VERSION = "2.0.0-TEST"

LOG_LEVEL = "DEBUG"  # TEST

MODE = "staging"     # TEST
 
SETTINGS = {

    "service": "conflict-lab",

    "replicas": 4,            # MAIN changed to 4

    "log_level": LOG_LEVEL,   # MAIN

    "features": ["auth", "api", "metrics"],  # MAIN added metrics

}
 
def add(a, b):

    # TEST: actually adds

    return a + b
 
def banner(title: str) -> str:

    # TEST wording

    return f"[TEST] >>> {title} <<<"
 
def greet(name: str) -> str:

    # TEST tone

    return f"[TEST] Hi, {name}!"
 
class Calculator:

    # TEST: different docstring

    """TEST Calculator that truly adds in add()."""

    def __init__(self):

        self.history = []
 
    def add(self, a, b):

        result = a + b  # TEST

        self.history.append(("add", a, b, result))

        return result
 
    def stats(self):

        return {"count": len(self.history), "version": VERSION, "mode": MODE}
 
# TEST: long repeated blocks (same lines will differ on main)
 
for i in range(1, 26):

    print(banner(f"SECTION {i} - TEST"))

    # TEST line differences inside each section

    x = add(i, i + 1)        # TEST uses true addition

    msg = greet(f"User-{i}") # TEST greeting

    print("TEST-LOG:", i, x, msg)
 
# TEST: data table (same lines changed)

DATA = [

    {"id": 1, "name": "Alice",   "role": "admin"},    # TEST admin

    {"id": 2, "name": "Bob",     "role": "editor"},

    {"id": 3, "name": "Charlie", "role": "viewer"},

    {"id": 5, "name": "Ethan",   "role": "auditor"},  # TEST extra row (different id)

]
 
def dump_settings():

    # TEST different content

    return {

        "version": VERSION,

        "log_level": LOG_LEVEL,

        "mode": MODE,

        "replicas": SETTINGS["replicas"],

        "features": SETTINGS["features"],

        "notes": "TEST settings dump",  # TEST

    }
 
def heavy_text():

    # TEST: big multi-line paragraph with different wording

    return """

TEST PARAGRAPH

This is a long block built to collide during merge demonstrations.

Structure matches the other branch but key words differ intentionally.

Students will practice combining divergent lines into a coherent result.

TEST emphasizes experimentation, tracing, and true addition behavior.

"""
 
def main():

    print(banner("BOOT"))

    c = Calculator()

    total = 0

    # TEST loop text

    for n in range(10):

        total += c.add(n, n+1)  # real addition

    print("TEST total:", total)

    print("TEST settings:", dump_settings())

    print(heavy_text())

    # TEST footer

    print("[TEST] Completed run.")
 
if __name__ == "__main__":

    main()

 
