# Mods by MakeBuild

A collection of lightweight JavaScript modules for enhancing web content with rich text tables, social sharing capabilities, and debug logging utilities.

## Modules

### Rich Text Tables
A JavaScript module that converts specially formatted text into responsive HTML tables. This module allows you to create tables using a simple pipe-based syntax within rich text content.

**Features:**
- Convert double-pipe (||) delimited text into HTML tables
- Support for table headers and custom cell types
- Column width ratios configuration
- Row and column spanning capabilities
- Custom CSS class assignments
- Named tables for reference

### Social Share Links
A lightweight JavaScript module that automatically generates social media sharing links for X (Twitter), Reddit, Facebook, and LinkedIn.

**Features:**
- Automatic URL encoding for safe sharing
- Support for multiple social platforms
- DOM-ready initialization
- Simple attribute-based configuration
- No external dependencies

### Debug Logger
A utility module that provides conditional debug logging based on URL parameters, allowing developers to enable debug output only when needed.

**Features:**
- Conditional logging based on `?debug=true` URL parameter
- Multiple log levels (log, error, warn)
- Global window object integration
- Zero overhead when debug mode is disabled
- Simple and lightweight implementation

## Usage

### Rich Text Tables
Add the `data-richtable-element="richtext"` attribute to containers where you want table processing to occur. Use double-pipe syntax for table rows:

```html
<div data-richtable-element="richtext">
  <p>||Header 1||Header 2||Header 3||</p>
  <p>||Data 1||Data 2||Data 3||</p>
</div>
```

### Social Share Links
Add the `mb-social-share-link` attribute to anchor elements:

```html
<a mb-social-share-link="x">Share on X</a>
<a mb-social-share-link="facebook">Share on Facebook</a>
<a mb-social-share-link="reddit">Share on Reddit</a>
<a mb-social-share-link="linkedin">Share on LinkedIn</a>
```

### Debug Logger
Use the global debug functions in your JavaScript code:

```javascript
debug('This will only log when ?debug=true is in the URL');
debugError('Error message');
debugWarn('Warning message');
```

## Installation

Include the desired module scripts in your HTML:

```html
<script src="src/rich-text-tables/rich-text-tables.js"></script>
<script src="src/social-share-links/social-share-links.js"></script>
<script src="src/debug-logger/debug-logger.js"></script>
```

## License

This project is open source and available under the MIT License.