# Visual Novel Website

A Flask-based website that hosts a visual novel experience. The visual novel is accessible through the `/novel` route, while the main website provides navigation and additional content.

## Features

- Modern, responsive website design
- Navigation between homepage and visual novel
- Integrated visual novel experience
- Flask backend for serving content

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the Flask application:
```bash
python app.py
```

3. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

- `app.py` - Main Flask application
- `templates/` - HTML templates
  - `base.html` - Base template with navigation
  - `homepage.html` - Homepage template
  - `novel.html` - Visual novel template
- `static/` - Static files
  - `style/` - CSS files
  - `js/` - JavaScript files
  - `assets/` - Images and other assets

## Development

To modify the visual novel content, edit the files in the `js/` directory. The main story content is in `script.js`.

To modify the website design, edit the files in the `style/` directory. 