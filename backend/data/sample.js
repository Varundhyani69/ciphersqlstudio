const assignments = [

    {
        title: "List All Employees",
        description: "Retrieve all employees from the employees table.",
        difficulty: "Easy",
        question: "Write a SQL query to fetch all columns from the employees table.",
        tables: ["employees"]
    },

    {
        title: "Employees With High Salary",
        description: "Filter employees based on salary.",
        difficulty: "Easy",
        question: "Write a query to find employees whose salary is greater than 50000.",
        tables: ["employees"]
    },

    {
        title: "Employees From Specific Department",
        description: "Filter records using WHERE.",
        difficulty: "Easy",
        question: "Write a query to get employees who belong to the 'Engineering' department.",
        tables: ["employees"]
    },

    {
        title: "Find Unique Departments",
        description: "Use DISTINCT to find unique values.",
        difficulty: "Easy",
        question: "Write a query to list all unique department names from the employees table.",
        tables: ["employees"]
    },

    {
        title: "Top 5 Highest Paid Employees",
        description: "Sort and limit results.",
        difficulty: "Easy",
        question: "Write a query to return the top 5 highest paid employees.",
        tables: ["employees"]
    },

    {
        title: "Count Total Employees",
        description: "Use aggregate functions.",
        difficulty: "Medium",
        question: "Write a query to count the total number of employees.",
        tables: ["employees"]
    },

    {
        title: "Average Salary",
        description: "Calculate average values.",
        difficulty: "Medium",
        question: "Write a query to find the average salary of employees.",
        tables: ["employees"]
    },

    {
        title: "Employees Per Department",
        description: "Group records by department.",
        difficulty: "Medium",
        question: "Write a query to count the number of employees in each department.",
        tables: ["employees"]
    },

    {
        title: "Departments With More Than 5 Employees",
        description: "Use GROUP BY and HAVING.",
        difficulty: "Medium",
        question: "Write a query to find departments that have more than 5 employees.",
        tables: ["employees"]
    },

    {
        title: "Employees Sorted by Salary",
        description: "Sort query results.",
        difficulty: "Medium",
        question: "Write a query to list employees ordered by salary in descending order.",
        tables: ["employees"]
    },

    {
        title: "Customers With Orders",
        description: "Join two tables.",
        difficulty: "Medium",
        question: "Write a query to list customers who have placed orders.",
        tables: ["customers", "orders"]
    },

    {
        title: "Orders With Customer Names",
        description: "Use INNER JOIN.",
        difficulty: "Medium",
        question: "Write a query to display order id, order date, and customer name for all orders.",
        tables: ["orders", "customers"]
    },

    {
        title: "Products Never Ordered",
        description: "Use LEFT JOIN.",
        difficulty: "Medium",
        question: "Write a query to find products that have never been ordered.",
        tables: ["products", "orders"]
    },

    {
        title: "Total Sales Per Product",
        description: "Aggregate sales values.",
        difficulty: "Medium",
        question: "Write a query to calculate total sales amount for each product.",
        tables: ["orders", "products"]
    },

    {
        title: "Customer With Highest Orders",
        description: "Combine GROUP BY and ORDER BY.",
        difficulty: "Hard",
        question: "Write a query to find the customer who has placed the highest number of orders.",
        tables: ["customers", "orders"]
    },

    {
        title: "Employees Above Department Average Salary",
        description: "Use subqueries.",
        difficulty: "Hard",
        question: "Write a query to find employees whose salary is greater than the average salary of their department.",
        tables: ["employees"]
    },

    {
        title: "Second Highest Salary",
        description: "Use nested queries.",
        difficulty: "Hard",
        question: "Write a query to find the second highest salary in the employees table.",
        tables: ["employees"]
    },

    {
        title: "Customers Without Orders",
        description: "Use NOT EXISTS or LEFT JOIN.",
        difficulty: "Hard",
        question: "Write a query to find customers who have never placed an order.",
        tables: ["customers", "orders"]
    },

    {
        title: "Top Selling Product",
        description: "Aggregate and sort.",
        difficulty: "Hard",
        question: "Write a query to find the product that has the highest total sales.",
        tables: ["products", "orders"]
    },

    {
        title: "Employees Working in Departments With Average Salary Above 60000",
        description: "Complex aggregation with subquery.",
        difficulty: "Hard",
        question: "Write a query to list employees who work in departments where the average salary is greater than 60000.",
        tables: ["employees", "departments"]
    }

];

export default assignments;