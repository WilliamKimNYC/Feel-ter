from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/setup-profile')
def setup_profile():
    return render_template('setup-profile.html')

@app.route('/select-chapter')
def select_chapter():
    return render_template('select-chapter.html')

@app.route('/chapter/1')
def chapter1():
    return render_template('chapter-1-microassaults.html')

@app.route('/quiz')
def quiz():
    return render_template('take-quiz.html')

@app.route('/quiz/results')
def quiz_results():
    return render_template('quiz-results.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
