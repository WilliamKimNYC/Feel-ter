from flask import Flask, render_template, send_from_directory, request, jsonify, session, redirect, url_for
import os
import secrets
import uuid
import json

# Configure static folder properly
app = Flask(__name__, 
           static_folder='static', 
           static_url_path='/static')
app.secret_key = secrets.token_hex(16)

# Add CORS support for Vercel with more permissive settings
from flask_cors import CORS
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/novel')
def visual_novel():
    # Get chapter parameter if it exists
    chapter = request.args.get('chapter', default=None)
    return render_template('novel.html', chapter=chapter)

@app.route('/quiz-results')
def quiz_results():
    # Get quiz_id from URL
    quiz_id = request.args.get('id', default=None)
    
    # If no quiz_id provided or not in session, redirect to homepage
    if not quiz_id or 'quiz_results' not in session or quiz_id not in session['quiz_results']:
        return redirect(url_for('homepage'))
    
    # Get quiz results from session
    quiz_data = session['quiz_results'][quiz_id]
    
    return render_template('quiz_results.html', 
                           score=quiz_data['score'], 
                           total=quiz_data['total'], 
                           missed_questions=quiz_data['missed_questions'],
                           selections=quiz_data['selections'])

@app.route('/save-quiz-result', methods=['POST'])
def save_quiz_result():
    data = request.json
    if data and 'score' in data and 'total' in data:
        # Generate a unique ID for this quiz attempt
        quiz_id = str(uuid.uuid4())
        
        # Parse missed questions if provided
        missed_questions = []
        if 'missed' in data and data['missed']:
            missed_list = data['missed'].strip().split(',')
            for q_index in missed_list:
                if q_index:  # Only process non-empty strings
                    try:
                        question_index = int(q_index.strip())
                        missed_questions.append(question_index)
                    except ValueError:
                        pass  # Skip invalid values
        
        # Store quiz results in session
        if 'quiz_results' not in session:
            session['quiz_results'] = {}
        
        session['quiz_results'][quiz_id] = {
            'score': data['score'],
            'total': data['total'],
            'missed_questions': missed_questions,
            'selections': data.get('selections', '{}')
        }
        
        # Save session
        session.modified = True
        
        # Return URL with only the quiz ID
        return jsonify({
            'success': True, 
            'url': f'/quiz-results?id={quiz_id}'
        })
    
    return jsonify({'success': False, 'error': 'Invalid data'})

@app.route('/assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory('assets', filename)

@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('js', filename)

@app.route('/style/<path:filename>')
def serve_style(filename):
    return send_from_directory('style', filename)

@app.route('/engine/<path:filename>')
def serve_engine(filename):
    return send_from_directory('engine', filename)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('.', 'favicon.ico')

@app.route('/manifest.json')
def manifest():
    return send_from_directory('.', 'manifest.json')

@app.route('/service-worker.js')
def service_worker():
    return send_from_directory('.', 'service-worker.js')

# Modify the main block for Vercel
if __name__ == '__main__':
    app.run(debug=True, port=5001)
else:
    # This is for Vercel
    app = app