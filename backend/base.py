from flask import Flask
import mysql.connector
from flask import request


mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="saias122",
    database="items"
)

mycursor = mydb.cursor()


def read_query(query):
    mycursor.execute(query)
    result = mycursor.fetchall()
    num_fields = len(mycursor.description)
    field_names = [i[0] for i in mycursor.description]
    obj = {'response' : []}
    for s in result:
        obj2 = {}
        for i in range(num_fields):
            obj2[field_names[i]] = s[i]
        obj['response'].append(obj2) 

    return obj

    '''
    {response : [
        {
            name: name,
            price: price
        }
    ]}
    
    '''

api = Flask(__name__)

@api.route('/best-sellers')
def get_best_sellers():
    query = ("SELECT name, price, img_path FROM items WHERE best_seller")
    res = read_query(query)
    return res

@api.route('/login', methods=['POST'])
def handle_login():
    data = request.get_json()
    query = "SELECT * FROM users WHERE email = '{}' AND password='{}'".format(data['email'], data['password'])
    res = read_query(query)
    return res
