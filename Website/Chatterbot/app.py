# import files
import nltk
import ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

nltk.download()
from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

chatbot = ChatBot(
    'TravelBot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[{
        'import_path': 'chatterbot.logic.BestMatch',
        'default_response': "I'm sorry, but I didn't quite catch that. For more help on using TravelBot, enter 'Help'.",
        'maximum_similarity_threshold': 0.90}
    ],
    database_uri='sqlite:///database.sqlite3'
)
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english.greetings")
trainer.train("./data/salamanca.yml")
trainer.train("./data/dunhuang.yml")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(chatbot.get_response(userText))


if __name__ == "__main__":
    app.run()