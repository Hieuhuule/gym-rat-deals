PROJECT TITLE

"Gym Rat Deals" is a platform that allows gyms to make an account and offer exclusive discount codes at no cost to the user.

DEMO LINK:

https://gymratdeals.herokuapp.com/

PROJECT DESCRIPTION

This is a "React-in-Rails" application which allows a Gym to create an account, add their gym in the form of a card to an index of other cards, edit/delete cards they have created, and list their promotions. Users are able to browse the application and view promotion codes on gym cards.

The current iteration of the app allows all users to be able to create an account and cards, however, the frontend sign up feature can be removed so that accounts can only be added in the backend by the developer. This would allow the app to be refocused on the business aspect where the app owner can offer gyms an account on the app to list their gym for a small fee. The exclusive deal code offered by the gym to the user provides valuable metrics to the gym on their "cost to acquire new customers".

Future planned features: 

	• User login to harvest user information
	
	• Impressions counter and clicked counter for gym cards
	
	• Health and fitness blog
	
	• Mailing list
	

INSTALLATION INSTRUCTIONS:

NOTE: You will need to have Ruby on Rails 7 installed

In terminal, run the following commands

$ git clone https://github.com/twentyonecode/gym-rat-deals.git 

$ cd gym-rat-deals

$ bundle

$ yarn

$ rails server


NOTE: You may need to manually start a server depending on your operating environment. For Postgresql running in Windows Subsystem for Linux, you will have to do so by using the following command:

$ sudo service postgresql start

Open your web browser and navigate to "https://localhost:3000/" 

To run the test suite, use the following command:
$ yarn test


CREDITS:

	• Hieu Le, Product Manager, Portfolio: www.hieuhuule.github.io 
	• Tuan Le, Project Manager, Portfolio: https://tuanlevietz.github.io/Portfolio/
	• Francisco Solis, Tech Lead,  Portfolio: https://francisco-solis-219.netlify.app/
	• Brook Williams, Design Lead, Portfolio: https://brookthecoder.com/
	


LICENSE:

MIT License

Copyright (c) [2022] [twentyone code]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
