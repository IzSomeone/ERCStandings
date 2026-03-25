from flask import Flask, jsonify, request, send_file, send_from_directory, session # type: ignore
from flask_cors import CORS # type: ignore
from supabase import create_client # type: ignore

app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route("/")
def serve_index():
    return send_from_directory(".", "index.html")

# Serve qualsiasi file statico (CSS, JS, immagini…)
@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory(".", path)

url = "https://jynyslmoqfbcjugskbwe.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bnlzbG1vcWZiY2p1Z3NrYndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTcxNDEsImV4cCI6MjA4OTg3MzE0MX0.3WHn4vCyHFfgnskTZAWfF6IYqysSJxDjcOcVhHQETm8"
supabase = create_client(url, key)

@app.get("/standings")
def get_standings():
    response = (
        supabase
        .table("standings")
        .select("*")
        .order("Position", desc=False)
        .execute()
    )
    return jsonify(response.data)


if __name__ == "__main__":
    app.run(debug=True)

