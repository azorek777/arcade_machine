import eel
import random
import os
from datetime import datetime

eel.init('web')


@eel.expose
def get_random_name():
    eel.prompt_alerts('Random name')


@eel.expose
def get_random_number():
    eel.prompt_alerts(random.randint(1, 100))


@eel.expose
def get_date():
    eel.prompt_alerts(datetime.now().strftime("%d/%m/%Y %H:%M:%S"))


@eel.expose
def launch_calc():
    os.system('C:\Windows\System32/calc.exe')

eel.start('index.html', mode='chrome')


'''
# uruchamianie w fullscreen mode
eel.start('index.html', mode='chrome', cmdline_args=['--kiosk'])
'''