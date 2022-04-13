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


def check_if_user_in_db(email, password):
    query = "SELECT * FROM users WHERE email = '{}' AND password='{}'".format(email, password)
    res = read_query(query)
    return res

api = Flask(__name__)

@api.route('/best-sellers')
def get_best_sellers():
    query = ("SELECT name, price, img_path FROM items WHERE best_seller")
    res = read_query(query)
    return res

@api.route('/upperwear')
def get_upperwear_items():
    query = ("SELECT name, price, img_path FROM items WHERE category='upperwear'")
    res = read_query(query)
    return res

@api.route('/lowerwear')
def get_lowerwear_items():
    query = ("SELECT name, price, img_path FROM items WHERE category='lowerwear'")
    res = read_query(query)
    return res

@api.route('/hats')
def get_hats_items():
    query = ("SELECT name, price, img_path FROM items WHERE category='hat'")
    res = read_query(query)
    return res

@api.route('/misc')
def get_misc_items():
    query = ("SELECT name, price, img_path FROM items WHERE category='misc'")
    res = read_query(query)
    return res

@api.route('/login', methods=['POST'])
def handle_login():
    data = request.get_json()
    res = check_if_user_in_db(data['email'], data['password'])
    return res

@api.route('/create-account', methods=['POST'])
def handle_create_account():
    data = request.get_json()
    user_in_db = True if len(check_if_user_in_db(data['email'], data['password'])['response']) == 1 else False
    res = None
    if user_in_db == False:
        query = "INSERT INTO users VALUES ('{}', '{}')".format(data['email'],data['password'])
        mycursor.execute(query)
        res = {'response' : 'Accepted'}
    else:
        res = {'response' : 'Rejected'}
    return res

api.run()