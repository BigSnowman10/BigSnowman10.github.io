---
title: String-Types
icon: blog
date: 2025-06-01 17:13:01
author: FelixSnowman
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## Introduction of String

There are many possibilities to use string 

```python
name = 'felix'

number = ' 25'

sentence = "hello world"

paragraph = ''' Hello , this is a pa
ragraph '''

paragraph_two = """  like this or not"""

```

What are the uses?

- The difference between `''`and `""` doesn't exist but it is just variation so you can use one of those symbols in your String.

- Then there are the triple `"""   """`, you use this to have multiple lines
- But why not use `\`to cut a line?
    - Because then, your String is cut into multiple lines. 

### 1. The Function `len`

- with `len` you can find out how many Characters a String has
- By that definition the max index is always the length - 1 

### 2. String index

- with the normal `[]`
- if its from start to finish to `:` can stand solely : `string[::-1]`

### 3. Formatting in Strings

```python
string = "Hello {}, Welcome to this Place.".format("theGuest")

print(string)

template_string = "Hi {}, Welcome to this Place"
formattet_string = template_string.format("Guest")
print(formattet_string)
```

