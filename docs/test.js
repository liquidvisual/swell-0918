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


// <!-- - title: Pages
//   url: /advanced-page/
//   include_children_in_nav: true
//   children:
//     - title: Advanced Page
//       url: /advanced-page/
//     - title: Standard Page
//       url: /standard-page/
//     # - title: About Us
//     #   url: /404/
//     - title: Blog
//       url: /blog/
//     - title: Blog Post
//       url: /blog/blog-item/
//     - title: Contact
//       url: /contact/
//     # - title: Landing Page
//     #   url: /404/
//     # - title: Login Page
//     #   url: /404/
//     # - title: Pricing Page
//     #   url: /404/
//     # - title: Ecommerce Page
//     #   url: /404/
//     # - title: Product Page
//     #   url: /404/
//     # - title: Profile Page
//     #   url: /404/
//     - title: Search Results
//       url: /404/
//     # - title: Signup Page
//     #   url: /404/
//     - title: Site Map
//       url: /site-map/
//     - title: 404
//       url: /404/ -->