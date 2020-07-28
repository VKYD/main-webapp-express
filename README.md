# VKYD Main Website
> 🛠️ Under development

Before you begin, make sure you have the following installed on your laptop -
* [Git](https://git-scm.com/downloads)
* [Node.JS and npm](https://nodejs.org/en/download/)
* [Sublime Text 3](https://www.sublimetext.com/3)
* [PugLint](https://github.com/SublimeLinter/SublimeLinter-pug-lint) and [StylusLint](https://packagecontrol.io/packages/SublimeLinter-contrib-stylint) in Sublime Text 3

The above links are either for downloading the mentioned softwares or tutorials that need to be followed for downloading them, make sure you follow them with utmost caution.

While installing the Linters for Sublime Text 3, make sure you restart the application in case the linters don't work.

### 💻 Steps for running the webapp on your local machine
1. Clone this repository onto your working drive ```git clone https://github.com/VKYD/underdev-website.git```
2. ```cd underdev-website```
3. ```npm i```
4. ```node app.js```
5. Now your webapp is running, open this folder in Sublime Text 3 to start editing, feel free to install Nodemon to prevent restarting the server

### 👗 SOP for adding a product
1. 📃 **Creating space on the dataset**
	1. Go to **data/products.json** ```cd data``` then ```products.json```
	2. Create a data entry for the new product with the following credentials
	   * **title** = Name of the product
	   * **product>name** = Name of the product
	   * **product>price** = Price of the product in INR
	   * **product>sizes** = Available sizes separated by ' | '
	   * **designer>name** = Name of the designer
	   * **designer>url** = Chosen social profile of the designer
	   * **content>para1, para2, para3, para4, para5** = Description paragraphs of the products (It's perfectly fine if not all of them are filled)
	   * **content>cartDescription** = A short description of the product to be shown in the cart
	   * **content>snapchatTryURL** = The generated SnapChat filter url for the apparel
	   * **content>InstagramTryURL** = The generated Instagram filter url for the apparel
	3. Feel free to check the demoProduct data entry

2. 🎬 **Adding media**
	1. Go to **public/media/products/**  ```cd public/media/products/```
	2. Create a new directory **productName**  ```mkdir productName``` (PS for noobs: **productName** needs to be replaced with the name of the product, in case there is a space in the name, replace it with a hyphen i.e. **-** everywhere)
	
	3. Go to the newly created **product directory** ```cd productName```
	4. Start adding images and the render video into the directory with the following properties -
		* File format for images: _**.jpg**_
		* File format for  the render video: _**.mp4**_
		* **Defined media sizes** (Defined width:height)
			* **1.jpg**: 4:3
			* **2.jpg**: 9:16
			* **3.jpg**: 9:16
			* **4.jpg**: 4:3
			* **5.jpg**: 3:2
			* **cart.jpg**: 1:1
			* **render.mp4**: 16:9

### ✨ You're done! Good job, I am proud of you 👍
