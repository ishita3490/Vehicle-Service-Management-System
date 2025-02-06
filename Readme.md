# Vehicle Service Management System 🚗🔧

## Overview
The **Vehicle Service Management System** is a full-stack web application designed to manage vehicle repairs, components, and revenue tracking. It includes a **Django backend** (REST API) and a **React frontend** for user interaction.

---

## Features ✨
- **Manage Components** - Add, edit, and delete vehicle components.
- **Manage Vehicles** - Add, update, and delete vehicles.
- **Repair Tracking** - Record vehicle repairs and their costs.
- **Revenue Analytics** - View revenue graphs based on repairs.
- **Admin Panel** - Manage components and repairs using Django Admin.
- **REST API** - Backend exposes RESTful APIs to interact with the database.

---

## Tech Stack 🛠️
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Django REST Framework (DRF)
- **Database:** SQLite (for development) / PostgreSQL (for production)

---

## Installation 🚀

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ishita3490/Vehicle-Service-Management-System.git
cd Vehicle-Service-Management-System
```

### 2️⃣ Backend Setup (Django)
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows

pip install -r backend/requirements.txt

cd backend
python manage.py migrate
python manage.py createsuperuser  # Create admin user (optional)

python manage.py runserver
```

### 3️⃣ Frontend Setup (React)
```bash
cd frontend
npm install

npm start
```
Your frontend should now be running at http://localhost:3000/.


---


##  API Endpoints 🔌
Endpoint	Method	Description
/api/components/	GET	Fetch all components
/api/vehicles/	GET	Fetch all vehicles
/api/repairs/	GET	Fetch all repairs
/api/revenue/	GET	Fetch revenue analytics

---

## Usage 🛠️
Add vehicle components via Admin Panel or API.
Register vehicles in the system.
Log repairs and view revenue graphs.
Monitor analytics to track service performance.






