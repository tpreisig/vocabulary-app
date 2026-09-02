# EloquApp and VocabApp
(...WIP)

Two Vocabulary Apps implemented with Express.js and EJS as a demo for template scripting with EJS.\
\
Keep in mind that template scripting with EJS is prone to XSS attacks. EJS is not uniquely cursed, but it is a frequent XSS magnet in the wild. EJS does HTML-escape by default with `<%= value %>`. The trap is the nearly identical `<%- value %>` tag that dumps raw HTML which might be rather hard to spot in 400-line template.

A 2018 study of real JavaScript apps found XSS in 43% of EJS projects versus 38% for Pug and only 12% for AngularJS.

## EloquApp

![screenshot](/EloquApp/assets/eloquApp.png)

## VocabApp

![screenshot](/VocabApp/assets/vocabApp.png)
