# Flowchart
# Diagramma di flusso
# Elisse = start / end
# Rombo = Scelta / condizione
# Rettangolo = Esecuzione

# Flow control statement

# if "condition": (that evaluates if True o False)
#   (indent)"if clause"
#
# elif
# Only one or none "elif" statement will be executed.
# "elif" statement will be executed when the condition is True.
# If all the condition are False "elif" will be not executed.
# To be sure that at least one clause is executed, use the "else" condition.
#

# while "condition":
#   (indent)"while clause" (will jump again to while "condition" while it's True)
# (ndAnto c'e' una ripetizione 'loop' che nella condizione if non c'e'.)
# The values : 0 , 0.0 and '' are considered False .
#
#
# yourName.py
#
# name = ''
# while name != 'your name':
#    print('Please type your name.')
#    name = input()
# print('Thank you!')
#
#
# yourName2.py example of infinite loop
# 
# while True: # the false clause will logicaly never happen
#    print('Please type your name.')
#    name = input()
#    if name == 'your name':
#         break
# print('Thank you!')
#
#
# swordfish.py
#
# while True:
#     print('Who are you?')
#     name = input()
#     if name != 'Anto':
#         continue
#     print('Hello Anto, what is the password ?')
#     password = input()
#     if password == 'swordfish':
#         break
# print('Wellcome Anto')
#
#
# howmanyguests.py 
#
# name = '' # False
# while not name:
#     print('Enter your name:')
#     name = input()
# print('How many guests you will have today?')
# numberOfGuests = int(input())
# if numberOfGuests: # se esiste un numero e quindi non e' False eseguira' la clausola print 
#     print('Be sure to have enought room for your guests!')
# print('done')












 
