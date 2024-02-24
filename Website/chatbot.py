# chatbot
import nltk
import spacy.cli
spacy.cli.download("en_core_web_md")
spacy.cli.download("en_core_web_sm")
spacy.load("en_core_web_sm")
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot import corpus

bot = ChatBot(
    'TravelBot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[{
        'import_path': 'chatterbot.logic.BestMatch',
        'default_response': 'I am sorry, but I do not understand.',
        'maximum_similarity_threshold': 0.90}
    ],
    database_uri='sqlite:///database.sqlite3'
)

trainer = ChatterBotCorpusTrainer(bot)

trainer.train("chatterbot.corpus.english") # add path to custom corpus file here

while True:
    try:
        bot_input = bot.get_response(input())
        print(bot_input)

    except(KeyboardInterrupt, EOFError, SystemExit):
        break

