

# Full-Stack Task Manager

A robust and user-friendly task management application built with **Golang (Gin)** for the backend and **React** for the frontend. This project allows users to create, view, update, and delete tasks efficiently.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Backend Setup](#backend-setup)
  * [Frontend Setup](#frontend-setup)
* [Project Structure](#project-structure)
  

## Demo
![Screenshot 2025-05-11 141748](https://github.com/user-attachments/assets/06c76924-cc57-4a3e-b01e-7be2074169c0)

![Screenshot 2025-05-11 141810](https://github.com/user-attachments/assets/f813110a-7be5-496e-bad7-4290a17884ac)

![Screenshot 2025-05-11 141824](https://github.com/user-attachments/assets/90bbfd5f-24c0-462e-9630-837b9fdabadc)


## Features

* Create, Read, Update, and Delete (CRUD) tasks
* Set task status: Pending or Completed
* Assign due dates to tasks
* Responsive and intuitive user interface
* Robust error handling and validations

## Tech Stack

* **Frontend:**

  * React
  * Axios
  * Tailwind CSS([Readme Templates][1], [GitHub][5], [Gist][6])

* **Backend:**

  * Golang with Gin framework
  * GORM for ORM
  * SQLite for the database([DhiWise][7])

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

* [Go](https://golang.org/doc/install)
* [Node.js and npm](https://nodejs.org/)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fullstack-task-manager.git
   cd fullstack-task-manager/backend
   ```



2. **Initialize Go modules:**

   ```bash
   go mod tidy
   ```



3. **Run the server:**

   ```bash
   go run main.go
   ```



The backend server will start at `http://localhost:8080/`.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```



2. **Install dependencies:**

   ```bash
   npm install
   ```



3. **Start the development server:**

   ```bash
   npm run dev
   ```



The frontend application will be available at `http://localhost:5173`.

## Project Structure

```bash
fullstack-task-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── main.go
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
├── README.md
```




