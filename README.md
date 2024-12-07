# Employee Data System (CRUD Application)

This repository contains a basic CRUD application built using the Angular framework. The application manages an Employee Database and demonstrates core Angular concepts, such as form handling, validations, and interaction with a mock backend using a JSON server.

## Features
- **Create**: Add a new employee with details such as name, date of birth, experience, package, gender, and education.
- **Read**: View the list of all employees in a structured table with the search filter.
- **Update**: Edit the details of an existing employee.
- **Delete**: Remove an employee from the database.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- Angular CLI installed globally. Run the following command if not already installed:
  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Install the necessary npm packages:
```bash
npm install
```

### 3. Set Up the JSON Server
This project uses JSON Server as a mock backend. To set it up:
1. Navigate to the project folder.
2. Run the following command to install JSON Server globally if not already installed:
   ```bash
   npm install -g json-server
   ```
3. Start the JSON server:
   ```bash
   json-server --watch db.json
   ```
   Ensure the `db.json` file is present in the root directory of the project. This file acts as the mock database for the application.

### 4. Start the Angular Development Server
Run the following command to serve the Angular application:
```bash
ng serve
```
The application will be accessible at `http://localhost:4200/`.

## Usage
1. Open the application in your browser.
2. Add new employees using the form provided.
3. View the list of employees in the table with the search filter.
4. Edit or delete employee details as required.

## Project Structure
- **src/app**: Contains the Angular components, services, and modules.
- **db.json**: The JSON file used as a mock backend.

## Dependencies
- Angular
- JSON Server
- Bootstrap (for styling)

## Commands Summary
- **Install dependencies**:
  ```bash
  npm install
  ```
- **Run JSON server**:
  ```bash
  json-server --watch db.json
  ```
- **Serve Angular application**:
  ```bash
  ng serve
  ```

## Screenshots
![image](https://github.com/user-attachments/assets/bd63aaa1-b36f-4fb5-8cb4-74fad26a1a3e)
![image](https://github.com/user-attachments/assets/5e26754e-b500-4097-bf80-102344005f5d)
![image](https://github.com/user-attachments/assets/9fbf70b8-14f3-46c7-95e7-55b7fad93d56)
![image](https://github.com/user-attachments/assets/9d59d1e9-06cb-4e47-80ff-52a1e5afddd8)

## Author
Anush Serrao
