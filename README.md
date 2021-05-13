# Evaluate A News Article with Natural Language Processing
Evaluate news article is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.
By using [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis).

## Get Up and Running

Fork this repo, then clone it from your forked repo down to your computer:
[Evaluate A News Article with Natural Language Processing](https://github.com/Ehab211/Evaluate-A-News-Article-with-Natural-Language-Processing).

```
git clone -- https://github.com/<<YourUserName>>/Evaluate-A-News-Article-with-Natural-Language-Processing.git --
```
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

`cd` into your new folder and run:
- ```npm install```

### Follow the steps below to configure environment variables:

1. Create a new `.env` file in the root of your project.
2. Fill the `.env` file with your API keys like this:
```
API_KEY=**************************
```
3. If not work use `npm` to install the dotenv package - `npm install dotenv` This will allow us to use environment variables we set in a new file
4. Start the project
Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project
- this app runs on localhost:8081, but you can of course edit that in server.js
