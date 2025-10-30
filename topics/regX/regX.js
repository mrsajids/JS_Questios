// regX to remove all non alphanumeric characters
function removeNonAlphanumeric(inputString) {
  return inputString.replace(/[^a-zA-Z0-9]/g, "");
}

/*
# 🧩 Regex Basics Cheat Sheet

| Type | Symbol / Example | Meaning | Example Match |
|------|------------------|----------|----------------|
| **Literals** | `a`, `b`, `cat` | Exact characters | `cat` → matches “cat” |
| **Any Character** | `.` | Any single character | `a.c` → “abc”, “axc” |
| **Digit** | `\d` | Any digit 0–9 | `\d\d` → “12” |
| **Non-Digit** | `\D` | Any non-digit | `\D+` → “abc” |
| **Word Character** | `\w` | A–Z, a–z, 0–9, _ | `\w+` → “hello_123” |
| **Whitespace** | `\s` | Space, tab, newline | `\s+` → spaces |
| **Anchors** | `^`, `$` | Start / End of line | `^Hello$` |

---

## 🔢 Quantifiers

| Symbol | Meaning | Example | Matches |
|---------|----------|----------|----------|
| `*` | 0 or more | `go*gle` | `ggle`, `google` |
| `+` | 1 or more | `go+gle` | `google` |
| `?` | 0 or 1 | `colou?r` | `color`, `colour` |
| `{n}` | Exactly n times | `\d{4}` | “2025” |
| `{n,}` | n or more | `a{2,}` | “aa”, “aaaa” |
| `{n,m}` | n to m | `\d{2,4}` | “99”, “2025” |

---

## 🧱 Character Sets

| Pattern | Meaning | Example Match |
|----------|----------|----------------|
| `[abc]` | a, b, or c | “a”, “b”, “c” |
| `[a-z]` | Lowercase letter | “g” |
| `[A-Z]` | Uppercase letter | “M” |
| `[0-9]` | Digit | “7” |
| `[^abc]` | NOT a, b, or c | “x” |

---

## 🚪 Anchors

| Symbol | Meaning | Example | Matches |
|---------|----------|----------|----------|
| `^` | Start of line | `^Hello` | “Hello world” |
| `$` | End of line | `world$` | “Hello world” |
| `\b` | Word boundary | `\bcat\b` | “cat” not “concatenate” |

---

## 🧠 Groups & Alternation

| Symbol | Meaning | Example | Matches |
|---------|----------|----------|----------|
| `(abc)` | Group | `(ha)+` | “ha”, “hahaha” |
| `a|b` | OR | `cat|dog` | “cat” or “dog” |

---

## 🧰 Common Practical Patterns

| Task | Regex | Example |
|------|--------|----------|
| Email | `^[\w.-]+@[\w.-]+\.\w+$` | `user@mail.com` |
| Phone (XXX-XXX-XXXX) | `\d{3}-\d{3}-\d{4}` | `987-654-3210` |
| Date (DD/MM/YYYY) | `\d{2}/\d{2}/\d{4}` | `27/10/2025` |
| Only letters | `^[A-Za-z]+$` | “Hello” |
| Only digits | `^\d+$` | “12345” |
| Password | `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$` | “abc123” |
 */
