# **Random Jokes Server**

Welcome to the **Random Jokes Server**, where you can get a random joke served dynamically to your browser! 🎉 This server fetches jokes using the [API Ninjas Jokes API](https://api-ninjas.com/api/jokes).

## **Repository URL**

Clone this repository to your local system using the following command:

```bash
git clone https://github.com/PS3012/Geekster-Node.git

### **Getting Started**
Follow these steps to set up the server on your local machine.

---

#### **1. Prerequisites**
Ensure you have the following installed:
 
 - Node.js (v16 or above recommended)
 - npm (comes with Node.js)


---

#### **2. Installation**
1. Clone the repository:

     ```bash
     git clone https://github.com/PS3012/Geekster-Node.git

2. Navigate to the project directory:

     ```bash
     cd randomJokes
     
3. Install dependencies:

     ```bash
     npm install


---

#### **3. Running the Server**
1. Start the Server:

     ```bash
     npm start

2. Open your browser and navigate to:

     ```bash
     http://localhost:8000

You will see a random joke served dynamically on the page.


---

### **4. API Reference**
This project uses the [API Ninjas Jokes API](https://api-ninjas.com/api/jokes) to fetch random jokes.

- **Base URL**: `https://api.api-ninjas.com/v1/jokes`
- **Headers**: Requires an `X-Api-Key` in the headers.
- **Response Example**:
  ```json
  [
    {
      "joke": "Why don't skeletons fight each other? They don't have the guts."
    }
  ]


---

#### **5. Features**
 
- Fetches a random joke every time you refresh the page.
- Responsive and simple UI to display jokes.
- Handles errors gracefully with a fallback message.


---

### **6. Project Structure**

```plaintext
random-jokes-server/
├── views/                # (Optional) EJS templates for dynamic HTML rendering
├── package-lock.json     # Locks the exact versions of dependencies for consistency
├── package.json          # Contains project metadata and dependency definitions
├── index.js              # Main server file where the application logic resides
└── README.md             # Project documentation and setup guide
```

---

### **7. Acknowledgments**

- [API Ninjas](https://api-ninjas.com/) for providing the jokes API.
- [Express.js](https://expressjs.com/) for the web framework.
- [Node.js](https://nodejs.org/) for the server runtime.