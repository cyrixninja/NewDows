from typing import Text
from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse
import openai

openai.api_key = "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"
app = Flask(__name__)


@app.route('/bot', methods=['POST'])
def bot():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    if len(incoming_msg)>1:
        promptxt=[incoming_msg +" "+" for the year 2022:\n\n1."]
        response = openai.Completion.create(
        prompt=promptxt,
        engine="ada-instruct-beta",
        temperature=0.8,
        max_tokens=75,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=["\n\n"]
        )
        text=response['choices'][0]['text']
        split_string = text.split("/n", 1)
        string = split_string[0]
        msg.body(string)
        print(promptxt)
        print(response)
        return str(resp)
    


if __name__ == '__main__':
    app.run()
