# Chatter OAuth Example in Node.JS

This is a simple example of a Salesforce / Chatter OAuth application written in Node.JS.  Here are the Salesforce / Chatter OAuth docs: http://wiki.developerforce.com/page/Digging_Deeper_into_OAuth_2.0_on_Force.com 

## Prerequisites

1. Ask your Salesforce/Chatter administrator to create an application for you in Salesforce.com.  They will need for you to provide a callback URL and they will provide you with client id and a client secret code which you will need to enter into server.js 

2. Unless you have an accessible domain or IP address that supports SSL that you can use to test your Salesforce callbacks, you will need to use a tunneling service like http://showoff.io to route the callback request to your localhost.  Use this domain in your Salesforce app configuration settings such as https://yoursubdomain.showoff.io/callback

3. Install the express and request node.js modules by running npm install

## Getting Started

1. Run Showoff on port 4567 to match your server.js port such as show -b user@email.com:password 4567

2. Run the node.js app with node server.js

3. Open your browser to https://yoursubdomain.showoff.io and you will be asked to authenticate using Bechtel SSO and then you will receive a JSON response with your Salesforce/Chatter access_token!

