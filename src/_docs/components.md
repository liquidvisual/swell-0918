---
layout: base__page_docs
title: Components
permalink: /components/
breadcrumbs: false
sections:
  - title: Sections
    children:
      - title: Default
        url: sections/section.html
        section: null
        files:
          - _includes/sections/section.html
        desc: |-
          This section is left aligned and can be passed a component or used just for text content.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

      - title: Center
        url: sections/section_center.html
        section: null
        files:
          - _includes/sections/section_center.html
        desc: |-
          This section is center aligned and can be passed a component or used just for text content.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

      - title: Full
        url: sections/section_full.html
        section: null
        files:
          - _includes/sections/section_full.html
        desc: |-
          This section is similar to the default, but components aren't constrained by a container. This will let any component extend to the full width of the viewport.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

      - title: Split
        url: sections/section_split.html
        section: null
        files:
          - _includes/sections/section_split.html
        desc: |-
          This section is split into two columns with the content appearing first. A component is required, appearing second.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

      - title: Split Reversed
        url: sections/section_split_reversed.html
        section: null
        files:
          - _includes/sections/section_split.html
        desc: |-
          This section is split into two columns with the content appearing last. A component is required, appearing first.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

  - title: Cards
    children:
      - title: Cards
        url: components/cards/cards.html
        section: sections/section.html
        files:
          - _includes/components/cards/cards.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Section is a basic collection of 2-4 card components without any advanced behavior. Content should be kept to short paragraphs rather than length text columns since tall cards will appear too narrow.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }

      - title: Cards Slider
        url: components/cards/cards__slider.html
        section: sections/section.html
        files:
          - _includes/components/cards/cards__slider.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Slider Section will create a carousel of 2-4 cards.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown", default: "" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "2" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }
          - { name: "categories", label: "Component Categories", widget: "relation" }
          - { name: "date", label: "Component Date", widget: "datetime" }
          - { name: "author", label: "Component Author", widget: "relation" }

      - title: Cards Tabs
        url: components/cards/cards__tabs.html
        section: sections/section.html
        files:
          - _includes/components/cards/cards__tabs.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Tabs Component will create tabbable cards in groups of 2-4.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }

  - title: Content
    children:
      - title: Accordion
        url: components/content/accordion.html
        section: sections/section.html
        files:
          - _includes/components/content/accordion.html
          - _data/accordion.yml
        desc: |-
          This component builds upon the [Collapse](https://getbootstrap.com/docs/4.1/components/collapse/) component from Bootstrap to organise content.

        fields: #

  - title: Text
    children:
      - title: Text Button
        url: components/text/text_button.html
        section: sections/section_split.html
        files:
          - _includes/components/text/text_button.html
        desc: |-
          This section contains a single WYSIWYG field and a button. It's best suited for a simple call to action.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "reverse_columns", label: "Section Reverse Columns", widget: "boolean", default: "false" }
          - { name: "align_columns", label: "Section Align Columns", widget: "select", options: [{label: "top", value: "top"}, {label: "center", value: "center"}, {label: "bottom", value: "bottom"}], default: "center" }

          # Component
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string", default: "Click me" }

      - title: Text Media
        url: components/media/media_lightbox.html
        section: sections/section_split.html
        files:
          - _includes/components/media/media_lightbox.html
        desc: |-
          This section provides a WYSIWYG field accompanied with an image, video (YouTube or Vimeo) or Google Map. Media will automatically open inside a lightbox when clicked. If no image is specified for video, the template will default to a still from that video.

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "reverse_columns", label: "Section Reverse Columns", widget: "boolean", default: "false" }
          - { name: "align_columns", label: "Section Align Columns", widget: "select", options: [{label: "top", value: "top"}, {label: "center", value: "center"}, {label: "bottom", value: "bottom"}], default: "center" }

          # Component
          - { name: "media", label: "Component Image", widget: "image" }
          - { name: "image_desc", label: "Component Image Description", widget: "string" }
          - { name: "link", label: "Component Link", widget: "string", default: "Component Image Path" }

  - title: Media
    children:
      - title: Affiliates
        url: components/media/affiliates.html
        section: sections/section_center.html
        files:
          - _includes/components/media/affiliates.html
        desc: |-
          This section is best suited for displaying a single row of small affiliate images - most commonly logos or sponsors. The section will accept any number of images and start stacking once they run out of room.

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }

          # Component
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "image_desc", label: "Component Image Description", widget: "string" }
          - { name: "link", label: "Component Link", widget: "string" }
      - title: Audio Player
        url: components/media/audio_player.html
        section:
        files:
          - _includes/components/media/audio_player.html
        desc: |-
          This component utilizes the [Plyr library](https://github.com/sampotts/plyr) for the display and control of mp3 audio. It aso uses the ```primary``` colour.

        fields:

      - title: Gallery
        url: components/media/gallery.html
        section: sections/section.html
        files:
          - _includes/components/media/gallery.html
          - _data/gallery.yml
        desc: |-
          This component contains a collection of images that open a lightbox. The lightbox is capable of displaying YouTube, Vimeo, Google Maps and standard images. Remove the <code>data-lightbox-group</code> attribute to fall back to normal link behavior.

          Grid spacing can be further controlled with <code>.is-condensed</code> and <code>.is-gapless</code>. If no caption data is passed to the gallery item, no text will be displayed on hover.

          By default the component displays four images across. To control this number, alter the class <code>.block-grid-md-4</code> on the list element to display a number from 1-12.

          <b>Eg.</b> <code>block-grid-md-3</code>.

        fields:

      - title: Media Article
        url: components/media/media_article.html
        section: sections/section.html
        files:
          - _includes/components/media/media_article.html
          - _data/media_articles.yml
        desc: |-
          This component aims to replace Bootstrap's [Media Object](https://getbootstrap.com/docs/4.1/layout/media-object/). It lists a collection of articles or a single article with an accompanying static image. Column direction can be reversed. It's best used in a confined space, eg. the [standard page](/standard-page/) layout. It can also be placed inside of any section.

        fields: #

      - title: Media Lightbox
        url: components/media/media_lightbox.html
        section: sections/section_split.html
        files:
          - _includes/components/media/media_lightbox.html
          - _data/gallery_single.yml
        desc: |-
          This component contains a <b>single</b> image that opens a lightbox. The lightbox is capable of displaying YouTube, Vimeo, Google Maps and standard images. Remove the <code>data-lightbox-group</code> attribute to fall back to normal link behavior.

          If no caption data is passed to the gallery item, no text will be displayed on hover.

        fields:

  - title: Forms
    children:
      - title: Contact
        url: components/forms/form_contact.html
        section: sections/section.html
        files:
          - _includes/components/forms/form_contact.html
        desc: |-
          A Vue powered, AJAX driven Contact Form with Vee-Validate. Make sure the wrapping id matches the 'el' property in the script below it.
          <div class="mb-4 alert alert-warning" role="alert">
            <b>Warning:</b> Vue can't work inside of this documentation. See Footer for working example.
          </div>

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }

      - title: Subscribe
        url: components/forms/form_subscribe.html
        section: null
        files:
          - _includes/components/forms/form_subscribe.html
        desc: |-
          A Vue powered, AJAX driven Subscribe Form with Vee-Validate. Make sure the wrapping id matches the 'el' property in the script below it.
          <div class="mb-4 alert alert-warning" role="alert">
            <b>Warning:</b> Vue can't work inside of this documentation. See <a href="/contact/">Contact</a> for working example.
          </div>

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }

---