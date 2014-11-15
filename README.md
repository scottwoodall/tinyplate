# tinyplate

A lightweight, responsive dashboard powered by Twitter Bootstrap. This is a fork of the [Responsive-Dashboard](https://github.com/Ehesp/Responsive-Dashboard) project but includes the following changes:

* The Angular dependency was removed.
* You can choose between a fixed or fluid width.
* When viewed on a mobile device, the sidebar has been replaced with an off canvas solution that is toggled with a button.

[demo](http://scottwoodall.com/tinyplate/)

### installation
* todo

### development
1. `git clone https://github.com/scottwoodall/tinyplate.git`
1. `npm install`
1. `npm run dev-server`
1. `npm run build` creates `dist/tinyplate.css` for when you're ready to commit.

Edit the source files under `./less` and webpack will automatically re-compile to `build/tinyplate.css`. Point your browser at [http://localhost:2922/webpack-dev-server/](http://localhost:2922/webpack-dev-server/) to see the changes.

### credits
* [Burke Holland](http://blogs.telerik.com/kendoui/posts/13-11-05/creating-a-rwd-off-canvas-layout-with-bootstrap-3) for his blog post on creating an off-canvas sidebar.
* The original [Responsive-Dashboard](https://github.com/Ehesp/Responsive-Dashboard) for creating a great looking dasbhoard.