## tinyplate
A lightweight, responsive dashboard powered by Twitter Bootstrap. This is a fork of the [Responsive-Dashboard](https://github.com/Ehesp/Responsive-Dashboard) project but includes the following changes:

* The Angular dependency was removed.
* Choose between a fixed or fluid layout.
* Change the width of your sidebar/content.
* When viewed on a mobile device, the sidebar has been replaced with an off canvas solution that is toggled with a button.

[demo](http://scottwoodall.com/tinyplate/)

#### installation (choose one)
* Grab [index.html](https://raw.githubusercontent.com/scottwoodall/tinyplate/master/dist/index.html) and [tinyplate.css](https://raw.githubusercontent.com/scottwoodall/tinyplate/master/dist/tinyplate.css) directly from Github.
* `npm install tinyplate`
* `bower install tinyplate`
* `git clone https://github.com/scottwoodall/tinyplate.git`

#### usage
Use `index.html` as the starting point for your project. 

#### changing layout from fixed to fluid
The template defaults to a fixed layout. If you want a fluid layout change the `container` class on the `#wrapper` div to `container-fluid`.

#### changing colors
Follow the development instructions and then make changes to `less/variables.less` and re-compile.

#### development
1. `git clone https://github.com/scottwoodall/tinyplate.git`
1. `cd tinyplate; npm install`
1. `npm run dev-server`

Edit the source files under `./less` and webpack will automatically re-compile. Point your browser at [http://localhost:2922/webpack-dev-server/](http://localhost:2922/webpack-dev-server/) to view your changes.

`npm run build` creates `dist/tinyplate.css` for when you're ready to commit.

#### credits
* Burke Holland for his [blog post](http://blogs.telerik.com/kendoui/posts/13-11-05/creating-a-rwd-off-canvas-layout-with-bootstrap-3) on creating an off-canvas sidebar.
* The original [Responsive-Dashboard](https://github.com/Ehesp/Responsive-Dashboard) for creating a great looking dashboard.

#### license
MIT
