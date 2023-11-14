# MSavvy_Blog_React_Django

MSavvy_Blog_React_Django is a blog site built with React for the frontend and Django REST Framework for the backend. This project aims to provide a dynamic and interactive platform for creating and sharing blog posts.

## Features

- **User Authentication**: Allow users to register, log in, and manage their profiles.
- **Blog Posts**: Create, edit, and delete blog posts.
- **Comments**: Enable users to comment on blog posts.
- **Responsive Design**: Ensure a seamless user experience across different devices.
- **API Integration**: Fetch and display data from the Django backend.

## Technologies Used

- **Frontend**:
  - React
  - React Router

- **Backend**:
  - Django
  - Django REST Framework

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/MSavvy_Blog_React_Django.git
    cd MSavvy_Blog_React_Django
    ```

2. **Setup Django Backend:**

    ```bash
    cd backend
    # Create and activate a virtual environment (optional but recommended)
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    # Install dependencies
    pip install -r requirements.txt
    # Apply migrations
    python manage.py migrate
    # Run the development server
    python manage.py runserver
    ```

3. **Setup React Frontend:**

    ```bash
    cd frontend
    # Install dependencies
    npm install
    # Start the development server
    npm start
    ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.**

## Contributing

If you'd like to contribute to this project, please reach out.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Django REST Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)

## Contact

For inquiries, please contact [momanyiturner@gmail.com].

