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
            client.close()
            return("true")
        else:
            client.close()
            return("false")
        # end example code here


    except Exception as e:
        raise Exception("The following error occurred: ", e)

def retrive_data(id):
    data = []

    try:
        client = MongoClient(os.getenv("MONGO_URI"))

        database = client[os.getenv("client")]
        collection = database[os.getenv("database")]

        # Retrieving documents that match the query
        result = collection.find({"video_id": id})

        # Iterating through the cursor to access documents
        for document in result:
            data.append(document)

        client.close()
        return data
    except Exception as e:
        raise Exception("The following error occurred: ", e)
def addData(list_of_dicts):
    try:
        client = MongoClient(os.getenv("MONGO_URI"))
        
        database = client[os.getenv("client")]
        collection = database[os.getenv("database")]
        print(list_of_dicts)
        # start example code here
        result = collection.insert_many(list_of_dicts)
        print(result.acknowledged)
        # end example code here

        client.close()

    except Exception as e:
        raise Exception(
            "The following error occurred: ", e)
