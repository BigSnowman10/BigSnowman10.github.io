---
title: VirtualEnvironments
icon: blog
date: 2025-05-01 16:36:51
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



## What is?

Without this external environment, there can only be one version of every program.  

That is if you want multiple versions of a program you will need a virtualized environment



### 10.2 Why a virtual environment

- Dependency management: Different projects may require different versions of libraries, and virtual environments can avoid version conflicts

- Project isolation : Keep the general environment clean and tidy. Each project has its own environment and will not effect each other .

- Easy to replicate: If you want to replicate your project on another machine or environment, a virtual environment makes this process easy because you can easily recreate an identical environment.



### 10.3 Several common Python virtual environment management tools

1. `venv` 
    - `venv` is Python's own virtual environment tool, which has been built-in since Python 3.3

2. `pipenv`
    - `pipenv` is a tool for Python development workflow that combines the functionality of `pip`  and `venv`
    - It automatically manages the project's virtual environment and uses `Pipfile` and `Pipfile.lock` to replace the traditional `requirements.txt`, which can more clearly define project dependencies
    - It also provides an overview of the dependency graph allowing developers to easily see the relationship between dependencies.
3. `conda` 
    - `conda` is an open source package, dependency, and environment manager that supports Python projects but can also be used for 



### 10.4 Create the virtual environment `venv` 

1. Create a new folder  

2. In the new folder open `ConEmu`

3. type the following code 

4. ``` 
    python -m venv "virtualEnvironmentName"
    ```

5. a new folder should pop up within your newly created folder

6. check the overall environment with `pip list`

7. activate the virtual environment with `virtualEnvironmentName\Scripts\activate`

8. after activating you may try `pip list` again and there should be nothing as it is in the virtual environment 

9. with the simple command of `deactivate` you can get out of the virtual environment 

    

### 10.5 Enter the new virtual environment 

1. In `PyCharm` enter the settings
2. Under the `Project` enter to `Python Interpreter` 
3. Click on `Add Interpreter ` and then `Local Interpreter` 
4. Select a already existing Environment under `Python Path` 
5. To return to the previous environment just click on the little arrow 

