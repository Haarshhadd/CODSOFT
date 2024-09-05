# RECOMMENDATION SYSTEM

This project implements a simple recommendation system that suggests items to users based on their preferences. It uses collaborative filtering techniques to recommend books to users. The project is implemented using Python in a Google Colab notebook, and the data is sourced from CSV files.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [Dataset-Description](#dataset-description)
- [Setup-and-Installation](#setup-and-installation)
- [How-it-Works](#how-it-works)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The aim of this project is to create a recommendation system that can recommend books to users based on their preferences. Collaborative filtering is applied to analyze user-item interactions (e.g., users rating books) and provide personalized book recommendations. The model can suggest top-rated books to users even if they have not previously rated those books.

## Features

- **Collaborative Filtering:** Predicts user preferences for books they haven't yet rated by leveraging other users' preferences.
- **Data Cleaning:** Removes missing values and irrelevant data for more accurate recommendations.
- **Top-N Recommendations:** Generates a list of top N recommended books for any user.
- **Model Evaluation:** Evaluates the recommendation model's performance using metrics like RMSE (Root Mean Squared Error).

## Technologies Used

- **Python:** Core programming language.
- **Pandas:** For data manipulation and handling CSV files.
- **Surprise Library:** Used for building the collaborative filtering recommendation model.
- **Matplotlib:** For visualizing data.
- **Google Colab:** To run the notebook and access files stored on Google Drive.

## Dataset Description

- **Books Dataset:** Contains details about various books such as title, author, year of publication, and ISBN.
- **Users Dataset:** Includes user demographic information such as user ID, location, and age.
- **Ratings Dataset:** Contains user ratings for books, with each row representing a user-book-rating triplet.

## Setup and Installation

1. **Google Colab Setup:**
   - Open the Colab notebook, `Task4.ipynb`, in Google Colab.

2. **Upload Datasets:**
   - Upload the following CSV files to your Google Drive and link them in the notebook:
     - `Books.csv`
     - `Users.csv`
     - `Ratings.csv`

3. **Install Required Libraries:**
   - Ensure the following libraries are installed in the Colab environment:
     ```bash
     !pip install pandas surprise matplotlib
     ```

4. **Run the Notebook:**
   - Execute each code block in the notebook sequentially to build, train, and evaluate the recommendation model.

## How it Works

1. **Data Loading and Preprocessing:**
   - The datasets (Books, Users, Ratings) are loaded from CSV files.
   - Unnecessary columns are dropped, and any missing values are removed from the datasets.
   
2. **Model Training:**
   - The data is converted into the format required by the `Surprise` library.
   - A collaborative filtering model is trained using matrix factorization techniques (e.g., SVD).
   
3. **Model Evaluation:**
   - The model is evaluated using RMSE to measure its prediction accuracy.

4. **Recommendation Generation:**
   - The model generates personalized book recommendations for users by predicting the ratings they would give to unrated books.
   - A function `get_reading_list()` retrieves the top 10 recommended books for a specific user.

5. **Results Visualization:**
   - A histogram is created to show the distribution of book ratings, providing insights into user preferences.

## Results

- The model is evaluated using RMSE, and its accuracy in predicting user preferences is measured.
- The system generates a list of top N recommended books for individual users based on their past ratings.

## Contributing

Contributions to this project are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
