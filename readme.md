# Job Application Management System API

## Overview

This API allows management of job applications, including job positions, applicants, and interview scheduling. It provides endpoints for CRUD operations and uses JWT-based authentication for secure access.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [Endpoints](#endpoints)
5. [Database Schema](#database-schema)
6. [Validation](#validation)
7. [Authentication](#authentication)
8. [Testing](#testing)
9. [Postman Collection](#postman-collection)

## Features

- **Job Management**: Create, retrieve job positions.
- **Applicant Management**: Add, update, delete applicants, and retrieve applicants by job.
- **Interview Scheduling**: Schedule interviews and fetch interview details.
- **Authentication**: Register, login, and protect API endpoints using JWT.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Postman (for testing)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/job-application-management-system.git
   cd job-application-management-system



# Endpoints

## Authentication

### Register

**POST** /api/register

**Request Body:**
```
{
  "username": "testuser",
  "password": "password123"
}
 ```
 {
  "message": "User registered successfully"
}

```


# Endpoints

## Authentication

### Register

**POST** /api/register

**Request Body:**
```json
{
  "username": "testuser",
  "password": "password123"
}
 ```
 ```
 {
  "token": "your-jwt-token"
}
```


## Test Job Endpoints

### Create Job

**Endpoint:** POST /api/jobs  
**URL:** http://localhost:5000/api/jobs  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Body (JSON):**
```json
{
  "title": "Software Engineer",
  "department": "Engineering",
  "description": "Develop software.",
  "openDate": "2024-09-01"
}
 ```

 ```
 {
  "title": "Software Engineer",
  "department": "Engineering",
  "description": "Develop software.",
  "openDate": "2024-09-01",
  "id": "some-generated-id",
  "createdAt": "2024-09-08T00:00:00Z",
  "updatedAt": "2024-09-08T00:00:00Z"
}
```

### Get Jobs

**Endpoint:** GET /api/jobs  
**URL:** http://localhost:5000/api/jobs  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Expected Response:**
```json
[
  {
    "title": "Software Engineer",
    "department": "Engineering",
    "description": "Develop software.",
    "openDate": "2024-09-01",
    "id": "some-generated-id",
    "createdAt": "2024-09-08T00:00:00Z",
    "updatedAt": "2024-09-08T00:00:00Z"
  },
  ...
]
```

## Test Applicant Endpoints

### Create Applicant

**Endpoint:** POST /api/applicants  
**URL:** http://localhost:5000/api/applicants  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Body (JSON):**
```json
{
  "jobId": "jobId_here",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "resumeLink": "http://example.com/resume",
  "status": "Pending"
}
 ```
 ```
 {
  "jobId": "jobId_here",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "resumeLink": "http://example.com/resume",
  "status": "Pending",
  "id": "some-generated-id",
  "createdAt": "2024-09-08T00:00:00Z",
  "updatedAt": "2024-09-08T00:00:00Z"
}
```

### Get Applicants by Job

**Endpoint:** GET /api/applicants?jobId=jobId_here  
**URL:** http://localhost:5000/api/applicants?jobId=jobId_here  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Expected Response:**
```json
[
  {
    "jobId": "jobId_here",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "resumeLink": "http://example.com/resume",
    "status": "Pending",
    "id": "some-generated-id",
    "createdAt": "2024-09-08T00:00:00Z",
    "updatedAt": "2024-09-08T00:00:00Z"
  },
  ...
]
```


### Update Applicant Status

**Endpoint:** PATCH /api/applicants/{applicantId}  
**URL:** http://localhost:5000/api/applicants/applicantId_here  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Body (JSON):**
```json
{
  "status": "Interviewed"
}

```

```
{
  "jobId": "jobId_here",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "resumeLink": "http://example.com/resume",
  "status": "Interviewed",
  "id": "applicantId_here",
  "createdAt": "2024-09-08T00:00:00Z",
  "updatedAt": "2024-09-08T00:00:00Z"
}
```

### Delete Applicant

**Endpoint:** DELETE /api/applicants/{applicantId}  
**URL:** http://localhost:5000/api/applicants/applicantId_here  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Expected Response:**
```json
{
  "message": "Applicant deleted"
}
 ```

 ## Test Interview Endpoints

### Schedule Interview

**Endpoint:** POST /api/interviews  
**URL:** http://localhost:5000/api/interviews  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Body (JSON):**
```json
{
  "applicantId": "applicantId_here",
  "interviewDate": "2024-09-10T10:00:00Z",
  "interviewerName": "Jane Smith"
}
 ```
 ```
 {
  "applicantId": "applicantId_here",
  "interviewDate": "2024-09-10T10:00:00Z",
  "interviewerName": "Jane Smith",
  "id": "some-generated-id",
  "createdAt": "2024-09-08T00:00:00Z",
  "updatedAt": "2024-09-08T00:00:00Z"
}
```

### Get Interviews by Applicant

**Endpoint:** GET /api/interviews?applicantId=applicantId_here  
**URL:** http://localhost:5000/api/interviews?applicantId=applicantId_here  
**Headers:**  
Authorization: Bearer your-jwt-token  

**Expected Response:**
```json
[
  {
    "applicantId": "applicantId_here",
    "interviewDate": "2024-09-10T10:00:00Z",
    "interviewerName": "Jane Smith",
    "id": "some-generated-id",
    "createdAt": "2024-09-08T00:00:00Z",
    "updatedAt": "2024-09-08T00:00:00Z"
  },
  ...
]

```




