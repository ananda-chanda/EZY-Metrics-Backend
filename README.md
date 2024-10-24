# EzyMetrics Backend

EzyMetrics is a backend application designed for data integrations and reporting, specifically for managing lead and campaign data. This application utilizes a Node.js server with Express.js to handle API requests, MongoDB for data storage, and Nodemailer for sending email notifications.

## Live Demo
- **Vercel:** [ezdata-tau.vercel.app](https://ezdata-tau.vercel.app)
- **GitHub:** [EzyMetrics Backend Repository](https://github.com/ananda-chanda/EZY-Metrics-Backend)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Integrates with dummy CRM and marketing platforms.
- Simulates fetching lead and campaign data.
- Performs ETL (Extract, Transform, Load) to generate meaningful metrics like conversion rates and total budget.
- Generates reports in PDF format.
- Sends email alerts when specific conditions are met (e.g., total campaign budget exceeds a threshold).

## Technologies Used
- **Node.js**: Runtime environment for executing JavaScript on the server side.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Nodemailer**: Module for sending emails.
- **PDFKit**: Library for generating PDF documents.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
