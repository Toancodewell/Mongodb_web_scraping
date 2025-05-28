# 🕸️ MongoDB Web Scraping & Data Analysis

This project demonstrates how to collect company data through web scraping, store it in MongoDB, and analyze it using advanced MongoDB aggregation queries. It includes both data collection (ETL) and data analysis components.
## 🔗 Data Source 
- List of largest companies in the United States by revenue: https://en.wikipedia.org/wiki/List_of_largest_companies_in_the_United_States_by_revenue
## 📁 Project Structure

- **Mongodb_web_scraping.ipynb**: A Jupyter Notebook that scrapes company data from the web using `requests` and `BeautifulSoup`, then stores the data into a MongoDB collection using `pymongo`.
- **Mongodb_industry_questions.js**: JavaScript file containing MongoDB aggregation queries to analyze industries based on average revenue, revenue growth, and average number of employees.
- **Mongodb_find.js / Mongodb_set.js**: Scripts to demonstrate basic find and update operations on the MongoDB dataset.

## 🧰 Technologies Used

- **Languages**: Python, JavaScript
- **Libraries**:
  - Python: `requests`, `BeautifulSoup`, `pymongo`
  - MongoDB Aggregation Pipeline
- **Database**: MongoDB
- **Environment**: Jupyter Notebook

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Toancodewell/Mongodb_web_scraping.git
## 📊 Features
- Automated data collection from web sources

- MongoDB storage and organization of company data

- Aggregation-based analysis:

  Industries with highest average revenue
  
  Industries with the fastest revenue growth
  
  Industries with the most employees on average


