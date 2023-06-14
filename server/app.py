import os
import requests
from PIL import Image
import omdb
import streamlit as st
import pandas as pd
import numpy as np
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Set Streamlit page configuration
st.set_page_config(page_title="Movie Recommendation System", page_icon="🎬", initial_sidebar_state="expanded")

# Load movie data
data = pd.read_csv('movies1.csv')

# Replace null values with empty strings
sel_features = ['genres', 'keywords', 'tagline', 'cast', 'director']
for feature in sel_features:
    data[feature] = data[feature].fillna('')

# Combine features
combine_features = data['genres'] + ' ' + data['keywords'] + ' ' + data['tagline'] + ' ' + data['cast'] + ' ' + data['director']

# Convert text data to feature vectors
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combine_features)

# Compute cosine similarity
similarity = cosine_similarity(feature_vectors)

# Set OMDB API key
omdb.set_default('apikey', '3f461a29')

# Streamlit app
def main():
    st.title("Movie Recommendation System")

    # Get movie name from query parameter
    movie_name = st.experimental_get_query_params().get("movie_name", [""])[0]

    if movie_name:
        # Find close match to movie name given by the user
        find_close_match = difflib.get_close_matches(movie_name, data['title'].tolist())
        if find_close_match:
            close_match = find_close_match[0]
            index_of_movie = data[data.title == close_match]['index'].values[0]

            # Get list of similar movies based on index of the movie
            similarity_score = list(enumerate(similarity[index_of_movie]))

            # Sorting the movies based on similarity scores
            sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

            # Display recommended movies and their posters with additional information
            st.header("Movies suggested for you:")
            counter = 0  # Counter variable to restrict the number of recommendations
            for index, movie in enumerate(sorted_similar_movies):
                title_from_index = data[data.index == movie[0]]['title'].values[0]
                if counter < 20:  # Display only 10 recommendations
                    search = omdb.search_movie(title_from_index)
                    if search and 'poster' in search[0]:
                        imdb_id = search[0]['imdb_id']
                        movie_info = omdb.imdbid(imdb_id)
                        if movie_info:
                            rating = movie_info.get('imdb_rating', 'N/A')
                            description = movie_info.get('plot', 'N/A')
                            imdb_link = f"[IMDb Link](https://www.imdb.com/title/{imdb_id}/)"
                            poster_url = search[0]['poster']
                            image = Image.open(requests.get(poster_url, stream=True).raw)
                            # Adjust the width and height values as per your preference
                            image = image.resize((200, 300))
                            st.image(image, caption=title_from_index)
                            st.write(f"**Rating:** {rating}")
                            st.write(f"**Description:** {description}")
                            st.markdown(imdb_link)
                            counter += 1  # Increment the counter
                else:
                    break  # Exit the loop after displaying 10 recommendations
    else:
        st.write("Enter a movie name in the search bar.")

# Run the Streamlit app
if __name__ == "__main__":
    main()
