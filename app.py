from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/novel')
def visual_novel():
    return render_template('novel.html')

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

if __name__ == '__main__':
    app.run(debug=True, port=5001)