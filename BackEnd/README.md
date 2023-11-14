# Creating a Django Project

Getting Started:

1. **Install Python:**

    ```bash
    # Check python version
    python --version
    ```

2. **Install Virtual Environment:**

    ```bash
    pip3 install pipenv
    ```

3. **Install Django Project:**

    ```bash
    mkdir BackEnd
    cd BackEnd
    pipenv install django
    pipenv shell
    django-admin startproject djangoapp .
    python manage.py runserver
    ```
