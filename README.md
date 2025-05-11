# Feel-ter: Understanding Microaggressions

A Flask-based interactive learning platform that helps users understand, recognize, and respond to microaggressions through an engaging visual novel experience and interactive quizzes.

## Live Site

Visit Feel-ter at [https://www.feel-ter.com/](https://www.feel-ter.com/)

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
- Direct chapter navigation with user name preservation
- Comprehensive quiz system with:
  - Interactive questions about microaggressions
  - Detailed feedback for each answer
  - Results page showing score and correct/incorrect answers
  - Social sharing functionality (Twitter/X, Facebook, copy link)
- Modern, responsive website design that works on all device sizes
- Character-guided learning experience
- Real-world scenario simulations
- Enhanced security with server-side session storage for quiz results

## Local Development Setup

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
http://localhost:5001
```

## Project Structure

- `app.py` - Main Flask application with routes and session management
- `templates/` - HTML templates
  - `base.html` - Base template with navigation
  - `homepage.html` - Homepage template with responsive design
  - `novel.html` - Visual novel template
  - `quiz_results.html` - Quiz results page with sharing functionality
- `static/` - Static files
  - `Media/` - Images including homepage graphics
  - `visual-novel/` - Visual novel assets and scripts
  - `style/` - CSS files
  - `main.css` - Main styles for the application
  - `js/` - JavaScript files
- `engine/` - Visual novel engine components

## Development

To modify the learning content:
- Edit visual novel scripts to update the scenarios and stories
- Modify quiz questions and answers in the quiz data
- Update the responsive styles in `style/main.css`

## Security Features

- Quiz results are stored in server-side sessions rather than URL parameters
- Each quiz attempt generates a unique ID to prevent manipulation
- Input validation on all form submissions

## Accessibility

- Responsive design works across all device sizes
- Semantic HTML structure for better screen reader compatibility
- Keyboard navigable interface 