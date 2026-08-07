---
layout: page
title: travelog
permalink: /
---

# Travelog

<!-- in support of search functionality -->

<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="Search blog posts...">
<ul id="results-container"></ul>

<!-- include the actual script -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<!-- call the search script based on values in search input field -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>

<ul>
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d:" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  #search-input {
    display: block;
    width: min(100%, 480px);
    margin: 1.5rem auto 1rem;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    #search-input {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }

    #results-container {
      width: 100%;
      padding: 0;
    }
  }
</style>
