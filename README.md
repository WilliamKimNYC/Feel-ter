# Feel-ter: Understanding Microaggressions

A Flask-based interactive learning platform that helps users understand, recognize, and respond to microaggressions through an engaging visual novel experience.

## About

Feel-ter is a space to *feel* and *filter* what you hear. It helps users learn how to:
- Recognize different types of microaggressions
- Understand why they hurt
- Learn appropriate ways to respond
- Create more inclusive environments

## Features

- Interactive visual novel experience with branching scenarios
- Three main learning chapters:
  - Chapter 1: Microinsults
  - Chapter 2: Microassaults
  - Chapter 3: Microinvalidations
- Interactive quiz to test understanding
- Modern, responsive website design
- Character-guided learning experience
- Real-world scenario simulations

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
    - `script.js` - Main story content and scenarios
    - `quiz-data.js` - Quiz questions and answers
  - `assets/` - Images and other assets

## Development

To modify the learning content:
- Edit `js/script.js` to update the visual novel scenarios
- Edit `js/quiz-data.js` to modify quiz questions and answers
- Edit files in the `style/` directory to update the website design 