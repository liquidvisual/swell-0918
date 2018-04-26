// ---
// output: true
// permalink: /docs/docs.js
// ---

// // const

// {% comment %}

// var posts = [
//   {% for post in site.posts %}
//     {
//       id: "{{ forloop.index }}",
//       date: "{{ post.date }}",
//       date_formatted: "{{ post.date | date: '%d %B %Y' }}",
//       title: "{{ post.title | escape }}",
//       url: "{{ post.url }}",
//       hero: "{{ post.hero }}",
//       // categories: "{{ post.categories | join: ', ' }}",
//       excerpt: "{{ post.excerpt | truncate: 150 | strip_html | strip_newlines | escape }}",
//     }{% unless forloop.last %},{% endunless %}
//   {% endfor %}
// ];

// {% endcomment %}