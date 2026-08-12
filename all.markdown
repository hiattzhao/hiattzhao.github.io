---
layout: default
title: all posts
permalink: /all
---

<h1>All <span>{{ site.posts | size }}</span> Posts</h1>

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

<ul id="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d:" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
