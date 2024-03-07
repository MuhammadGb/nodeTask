
## Getting Started

# Application Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
3. [Features](#features)
    - [Hooks System](#hooks-system)
    - [CLI for Model Creation](#cli-for-model-creation)

## Introduction

This document provides information on setting up and using the features of the backend application.

## Setup

### Prerequisites

Ensure that you have the following installed on your system:

- Node.js (version x.x.x)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MuhammadGB/nodeTask.git
    ```

2. Change into the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

- Customize configuration files as needed (e.g., API endpoint configurations, database connection).

## Features

### Hooks System

The application implements a Hooks System with the following hooks:

- `afterStart`: Runs after the application starts.
- `beforeMigrate`: Runs before database migration.
- `afterMigrate`: Runs after database migration.

### CLI for Model Creation

The CLI tool allows creating a new model in the database. Example command:

```bash
# npm run create-model User
# API Endpoint to retrieve data based on a model name,fields, and specifying filter conditions. 

# Usage
# Running Hooks
# To run hooks, use the following command:

# bash
# npm run run-hooks
# This will execute all registered hooks.

# Creating a Model
# To create a new model, use the following command:

# bash
# npm run create-model User
# This will generate the necessary files in the models/User folder.

# Accessing API Endpoint

# bash
# npm start
# Access the API endpoint at http://localhost:3000/api/models/:modelName using a get request