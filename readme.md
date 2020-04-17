# WebIMGo

Batch image resizing and optimisation CLI tool.

This is CLI tool is helpful for anyone who wants to quickly resize and optimise images in batch within a directory and its subdirectories.

It will replace those images with optimised ones.


<br/>

---

## Prerequisites

You should have Nodejs v7.6 or greater running on your system. Install if you already haven't.

<a href="https://nodejs.org/" target="_blank">Install Nodejs</a>



## Installing

Installing this CLI tool simple and straightforward using NPM.
Install it as global.

```
sudo npm install webimgo -g
```

or

```
sudo npm i webimgo -g
```
Enter system password if asked

<br/>

## Usage

To optimise all images in a folder, simply point your terminal to that folder and type command `webimgo` then press 'Enter' key.
This will compress all JPG/PNG images within that folder as well as its sub folders.

```
 webimgo
 ```

To resize width along with optimising images in a folder and its subfolder, simply type below command passing `<width>` parameter.

```
webimgo -w <width>
```

Replace `<width>` width with the amount of maximum width in pixels allowed.

### Examples

E.g. To resize images width to 1200 pixels for all images with width more than 1200 pixels and to compress all images, use:
```
webimgo -w 1200
``` 
This will resize images width to 1200 pixels for all images with width more than 1200 pixels and compress all images.

<br/>

---


#### Built Using

* [Nodejs](https://nodejs.org/) - Javascript runtime
* [Sharp](https://www.npmjs.com/package/sharp) - Used to resize images
* [imagemin](https://www.npmjs.com/package/imagemin) - Used to compress images
* [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg) - Used for compressing JPGs
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) - Used for compressing PNGs
* [Yargs](https://www.npmjs.com/package/yargs) - Used as command line parser
* [image-size](https://www.npmjs.com/package/image-size) - Used for reading image dimensions
* [Chalk](https://www.npmjs.com/package/chalk) - stylising the terminal

#### Versioning

We use [GIT](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

#### Authors

* **Sharun John** - [Github Profile](https://github.com/shaan07) - [Facebook](https://www.facebook.com/sharunjon) - [LinkdedIn](https://nz.linkedin.com/in/sharun-john)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

#### License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

### Acknowledgments

* Hats off to all package developers and contributers for those amazing works.

