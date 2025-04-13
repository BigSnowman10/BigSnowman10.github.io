---
title: Writing Articles Tutorial
icon: blog
date: 2025-04-06 18:29:45
author: FelixSun
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
editLink: false
backToTop: true
toc: true

---

## 1. 标题编写

::: md-demo 演示

# 标题1

## 标题2

### 标题3

#### 标题4

##### 标题5

###### 标题6



> While writing an article Heading 1 in rarely used as it is then seen as the actual title

:::

## 2.代码块

::: md-demo 代码块添加语法演示



1. markdown 语法

``` markdown
# 标题1
## 标题2
### 标题3 
#### 标题4
##### 标题5
###### 标题6
```

2. python 代码

   ``` python
   import random
   
   number_to_guess = random.randint(1, 100)
   guess_count = 0
   max_tries = 10
   
   print("猜数字游戏开始！尝试猜测一个在 1 到 100 之间的数字。你有 10 次机会。")
   
   while guess_count < max_tries:
       guess_str = input("请输入你的猜测：")
       if not guess_str.isdigit():
           print("请输入一个有效数字！")
           continue
       guess = int(guess_str)
       guess_count += 1
   
       if guess < number_to_guess:
           print("太低了！再试一次。")
       elif guess > number_to_guess:
           print("太高了！再试一次。")
       else:
           print(f"恭喜！你猜对了数字 {number_to_guess}！你总共猜了 {guess_count} 次。")
           break
   if guess != number_to_guess:
       print(f"很遗憾，你的机会已用完。正确的数字是 {number_to_guess}。")
   
   ```

3. java 代码

   ``` java
   public class HelloWorld {
       public static void main(String[] args) {
           // 输出 Hello Bornforthis 到控制台
           System.out.println("Hello, Bornforthis!");
       }
   }
   
   ```

   

:::







 