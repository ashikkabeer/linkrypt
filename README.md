# Linkrypt

minimalistic and secure platform for managing private links. It provides users with a discreet and efficient way to organize and share private links within a centralized hub.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Docker (optional, for containerized development)
- PostgreSQL (locally or via Docker)

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ashikkabeer/linkrypt.git
    cd linkrypt
    ```
2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**
    ```bash
    # General
    PORT=3000

    # Database
    DATABASE_URL=postgres://username:password@localhost:5432/linkrypt
    ```

4. **Run the Development Server**
    ```bash
    npm run dev
    ```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
