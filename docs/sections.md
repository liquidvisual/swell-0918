<!-- ---
layout: base__page_docs
title: Sections
permalink: /sections/
breadcrumbs: false
sections:
  - title: Hero
    children:
      - title: Hero
        url: components/hero/hero.html
        files:
          - _includes/components/hero/hero.html
          - _includes/components/hero/hero__youtube_plugin.html
        desc: |-
          The Hero is the most prominent section of the website above the fold. Each page requires a hero at the top, whether fully featured (carousels, video etc) or short and static.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "mode", label: "Section Mode", widget: "select", options: [{label: "Default", value: 'is-default'}, {label: "Medium", value: "is-medium"}, {label: "Full", value: "is-full"}], default: "is-default" }
          - { name: "justify_caption", label: "Section Justify", widget: "select", options: [{label: "Left", value: "left"}, {label: "Center", value: "center"}], default: "center" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "display_class", label: "Component Header Size", widget: "select", options: [{label: "Display 1", value: "display-1"}, {label: "Display 2", value: "display-2"}, {label: "Display 3", value: "display-3"}, {label: "Display 4", value: "display-4"}, {label: "Display 5", value: "display-5"}], default: "display-1" }
          - { name: "body", label: "Component Body", widget: "markdown" }

          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "scroll_prompt", label: "Component Scroll Prompt", widget: "boolean", default: true }
          - { name: "youtube_id", label: "Component YouTube Id", widget: "string" }
          - { name: "vimeo_id", label: "Component Vimeo Id", widget: "string" }

          # Component Modifiers
          - { name: "theme", label: "Component Theme", widget: "select" }
          - { name: "bg_image", label: "Component Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Component Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Component Background Tinted", widget: "boolean", default: "false" }

      - title: Hero Static
        url: components/hero/hero_static.html
        files:
          - _includes/components/hero/hero_static.html
        desc: |-
          The Hero is the most prominent section of the website above the fold. Each page requires a hero at the top, whether fully featured (carousels, video etc) or short and static.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "mode", label: "Section Mode", widget: "select", options: [{label: "Static", value: 'is-static'}], default: "is-static" }

          # Component
          - { name: "title", label: "Component Header", widget: "hidden", default: "page.title" }

          # Component Modifiers
          - { name: "theme", label: "Component Theme", widget: "select" }
          - { name: "bg_image", label: "Component Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Component Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Component Background Tinted", widget: "boolean", default: "false" }
--- -->