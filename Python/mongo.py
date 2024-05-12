import pymongo
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
def database_check(id):
    
    try:
        client = MongoClient(os.getenv("MONGO_URI"))

        database = client[os.getenv("client")]
        collection = database[os.getenv("database")]

        # start example code here
        result = collection.count_documents({"video_id": id})
        if result > 0:
            print("true")
        else:
            print("false")
        # end example code here

        client.close()

    except Exception as e:
        raise Exception("The following error occurred: ", e)

database_check("KbzGy3whpy0")