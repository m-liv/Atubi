# chatbot
# import nltk
# import spacy.cli
# spacy.cli.download("en_core_web_md")
# spacy.cli.download("en_core_web_sm")
# spacy.load("en_core_web_sm")
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

global destination

bot = ChatBot(
    'TravelBot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[{
        'import_path': 'chatterbot.logic.BestMatch',
        #'default_response': "I'm sorry, but I didn't quite catch that. For more help on using TravelBot, enter 'Help'.",
        'maximum_similarity_threshold': 0.90}
    ],
    database_uri='sqlite:///database.sqlite3'
)

trainer = ChatterBotCorpusTrainer(bot)

trainer.train("chatterbot.corpus.english.greetings") # add path to custom corpus file here
# trainer.train("./Chatterbot/data/salamanca.yml")
# trainer.train("./Chatterbot/data/dunhuang.yml")

name = input("Hi, I'm TravelBot! What is your name? > ")
print("Nice to meet you, " + str(name) + "!")
destinationInput = input("Tell me, what is your next destination? > ")
runLoop = True
while (runLoop):
    if ("salamanca" in destinationInput.casefold()) | ("spain" in destinationInput.casefold()):
        trainer.train("./Chatterbot/data/salamanca.yml")
        destination = "Salamanca"
        break
    elif ("dunhuang" in destinationInput.casefold()) | ("china" in destinationInput.casefold()):
        trainer.train("./Chatterbot/data/dunhuang.yml")
        destination = "Dunhuang"
        break
    elif ("srinagar" in destinationInput.casefold()) | ("kashmir" in destinationInput.casefold()):
        destination = "Srinagar"
        break
    elif ("krabi town" in destinationInput.casefold()) | ("thailand" in destinationInput.casefold()):
        destination = "Krabi Town"
        break
    elif ("assissi" in destinationInput.casefold()) | ("italy" in destinationInput.casefold()):
        destination = "Assissi"
        break
    elif ("rabat" in destinationInput.casefold()) | ("morocco" in destinationInput.casefold()):
        destination = "Rabat"
        break
    elif ("tsarabanjina" in destinationInput.casefold()) | ("madagascar" in destinationInput.casefold()):
        destination = "Tsarabanjina Island"
        break
    elif ("hakone" in destinationInput.casefold()) | ("japan" in destinationInput.casefold()):
        destination = "Hakone"
        break
    elif ("puerto vallarta" in destinationInput.casefold()) | ("mexico" in destinationInput.casefold()):
        destination = "Puerto Vallarta"
        break
    else:
        print("Hmm, I don't know that one.. may I interest you in any of the following? ")
        print(" - Assissi, Italy")
        print(" - Dunhuang, China")
        print(" - Hakone, Japan")
        print(" - Krabi Town, Thailand")
        print(" - Puerto Vallarta, Mexico")
        print(" - Rabat, Morocco")
        print(" - Tsarabanjina Island, Madagascar")
        print(" - Srinagar, Kashmir")
        destinationInput = input("What is your next destination? > ")


print(str(destination) + ", what a great city! ")
print("You can ask me questions to learn more about it. A list of suggested prompts include: ")
print(" - Tell me about " + str(destination) + ".")
print(" - What are some things to do in " + str(destination) + "?")
print(" - What are some tourist attractions in " + str(destination) + "?")
print(" - What is the culture like in " + str(destination) + "?")
print(" - What is a popular food in " + str(destination) + "?")
print(" - What kind of music do the people of " + str(destination) + " listen to?")

global responseSet
global setSize
global newSetSize

responseSet = set()
while True:
    try:
        userIn = input("> ")
        setSize = len(responseSet)
        bot_input = bot.get_response(userIn)
        responseSet.add(bot_input)
        newSetSize = len(responseSet)
        timesTried = 0
        while (newSetSize == setSize) & (timesTried < 10):
            bot_input = bot.get_response(userIn)
            newSetSize = len(responseSet)
            timesTried += 1
        print(bot_input)

    except(KeyboardInterrupt, EOFError, SystemExit):
        break

