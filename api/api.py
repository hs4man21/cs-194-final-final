import time
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os 

app = Flask(__name__)

import sqlite3

def convertToBinaryData(filename):
    #Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def writeTofile(data, filename):
    # Convert binary data to proper format and write it on Hard Disk
    with open(filename, 'wb') as file:
        file.write(data)
    print("Stored blob data into: ", filename, "\n")

@app.route('/add/<string:one>/<int:two>')
def add(one, two):
    sqlite_insert_query = """INSERT INTO tbl1
                          (one, two) 
                           VALUES 
                          ('{}', {})""".format(one, two)
    c.execute(sqlite_insert_query)
    conn.commit()
    c.close()
    return { 'status': 200 }

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    dir_path = os.path.dirname(os.path.realpath(__file__))
    filename = secure_filename(file.filename)
    save_path = dir_path + filename
    file.save(save_path)
    one = request.form['one']
    two = request.form['two']
    binary = convertToBinaryData(save_path)
    sqlite_insert_blob_query = """ INSERT INTO tbl1
                                  (one, two, photo) VALUES (?, ?, ?)"""

    data_tuple = (one, two, binary)
    c.execute(sqlite_insert_blob_query, data_tuple)
    conn.commit()
    c.close()

@app.route('/upload-t', methods=['POST'])
def uploadT():
    conn = sqlite3.connect('test.db')
    c = conn.cursor()

    file = request.files['file']
    dir_path = os.path.dirname(os.path.realpath(__file__))
    filename = secure_filename(file.filename)
    save_path = dir_path + filename
    file.save(save_path)
    binary = convertToBinaryData(save_path)

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    university = request.form['university']
    employer = request.form['employer']
    sqlite_insert_blob_query = """ INSERT INTO tutors
                                  (first_name, last_name, email, university, employer, photo) VALUES (?, ?, ?, ?, ?, ?)"""

    data_tuple = (first_name, last_name, email, university, employer, binary)
    c.execute(sqlite_insert_blob_query, data_tuple)
    conn.commit()
    c.close()

@app.route('/get-tutors')
def getTutors():
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    c.execute('SELECT * FROM tutors')
    rows = c.fetchall()
    c.close()
    return jsonify(rows[0][:-1])

@app.route('/get-tutor-image')
def getTutorImage():
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    c.execute('SELECT * FROM tutors')
    rows = c.fetchall()
    c.close()
    writeTofile(rows[0][-1], "../src/test-file.png")
    return jsonify({ "response": 200 })
