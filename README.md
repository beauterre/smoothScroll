[![Dutch Flag](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/30px-Flag_of_the_Netherlands.svg.png)](https://github-com.translate.goog/beauterre/smoothScroll/blob/master/README.md?_x_tr_sl=en&_x_tr_tl=nl&_x_tr_hl=nl&_x_tr_pto=wapp) [LEES IN HET NEDERLANDS](https://github-com.translate.goog/beauterre/smoothScroll/blob/master/README.md?_x_tr_sl=en&_x_tr_tl=nl&_x_tr_hl=nl&_x_tr_pto=wapp)



# Warning: You Might Be Adding an Unnecessary Library!

Nowadays, all you need to implement smooth scrolling is the following CSS:
```
html {
  scroll-behavior: smooth;
} 
```
This simple line of code allows you to create anchor links on your page, just as described in the tutorials below and on countless places on the web.

## sorry, I am a teacher and this is a teachable moment, bear with me if you are up for some fast paced learning..
The library you're currently considering was created back in 2017/2018, during a time when ES5 (JavaScript version 5) was universally supported, but ES6 wasn't yet widely adopted. Developers back then often jumped to ES6 solutions for future-proofing, which, in hindsight, was a bit unnecessary. By the time ES6 became widely supported, so was the `scroll-behavior` CSS property.

At the time this library was built, browser support for the `scroll-behavior` property was inconsistent, and only ES5 worked reliably across all platforms. As a result, this script was a very specific solution to a problem that no longer exists.

Despite this, the library remains one of my more popular repositories, so I wanted to include this warning to save you from using an outdated solution.
This is from the time of the 
```
 /$$                                                                                                                  
| $$                                                                                                                  
| $$$$$$$   /$$$$$$   /$$$$$$  /$$  /$$  /$$  /$$$$$$$  /$$$$$$   /$$$$$$  /$$  /$$  /$$  /$$$$$$   /$$$$$$   /$$$$$$$
| $$__  $$ /$$__  $$ /$$__  $$| $$ | $$ | $$ /$$_____/ /$$__  $$ /$$__  $$| $$ | $$ | $$ |____  $$ /$$__  $$ /$$_____/
| $$  \ $$| $$  \__/| $$  \ $$| $$ | $$ | $$|  $$$$$$ | $$$$$$$$| $$  \__/| $$ | $$ | $$  /$$$$$$$| $$  \__/|  $$$$$$ 
| $$  | $$| $$      | $$  | $$| $$ | $$ | $$ \____  $$| $$_____/| $$      | $$ | $$ | $$ /$$__  $$| $$       \____  $$
| $$$$$$$/| $$      |  $$$$$$/|  $$$$$/$$$$/ /$$$$$$$/|  $$$$$$$| $$      |  $$$$$/$$$$/|  $$$$$$$| $$       /$$$$$$$/
|_______/ |__/       \______/  \_____/\___/ |_______/  \_______/|__/       \_____/\___/  \_______/|__/      |_______/ 
```
*browserwars* if you don't read ascii :)

What is and isn't supported changes all the time.  
To see if you can use the above solution in your situation (or anything in any situation), check:

![caniuse-tables](https://github.com/user-attachments/assets/398f9a45-0fb6-4db6-a57d-8286da8913ad)

[http://CanIUse.com](https://caniuse.com/?search=scroll-behavior) is a very handy resource for any developer in today's landscape of quickly changing features, every day a new device or screen-format and varying support for features.


Welcome to front-end development! You're welcome to grumble a bit—then accept it and learn our ways. 🙂 We all did that at some point, still the best profession in the world. (You are freaking creating the internet!)

# Use Cases

So, why do I leave this snippet/library up? Well, partly to educate the young and starry-eyed developers like yourself (probably). But there are also genuine niche use cases.

If you suspect you have users who haven't updated their browsers in the last 7 years, or -god forbid- they are on "opera mini", then by all means, include this feature. And while you're at it, take a moment to check if you're using other libraries that aren't needed.

# Don't Make Your Page Slower Than Necessary

Vanilla HTML5 and ECMAScript 6 (ES6) support so much that you can write complete games and applications directly in your browser without any libraries—and it's still optimized for text, images, and links. Isn't that amazing? 

Learn vanilla first, before diving into libraries. Trust me, it will slow you down at first, but you'll thank me later.

Search engines today track the loading time of your pages because it's a great way to gauge the quality of your development. Good developers achieve a lot with small, fast-loading pages. They ensure that everything crucial loads within 250ms on a good connection and then lazy-load the rest if needed. Just my opinion, but Google seems to agree. :)

Use as few libraries as possible, and if you really need one, host it locally. It’s really much faster that way. Also, it helps you easily keep track of just how big a load your page IS!

# smoothScroll-Es5.js

Smooth scrolling in vanilla JavaScript (ES5)—no jQuery required!

If you've read the above, you can probably guess by now why I prefer not to use jQuery. There's nothing it actually adds that you can't achieve with vanilla HTML5/JS. While jQuery might be convenient for (some) developers, front-end development should prioritize user experience. Adding jQuery can increase page load time by precious milliseconds, which can result in performance penalties from Search Engines and other drawbacks. But feel free to make your own choice! If you are just starting out and have a project due tomorrow.. This might be the time for a shortcut, not for learning and improving your skillset..

This script was at some point during the *browserwars* made especially for students at MediaCollege Amsterdam by Hjalmar Snoep.

**LICENSE:** Use it anywhere, credit or don't—it's up to you!


# How to use..
 - Include  smoothScroll-Es5.js in a script tag in your header.
 ```javascript
  <script src="smoothScroll-ES5.js"></script>
```
 - add an id to the element you'd like to scroll to
 ```HTML
  <section id="idtoScrollTo"></section>
```
 
 - Use a regular link to href any id on your page (or any other element, but links are best for backwards compatibility).
 - add class scrollOnClick to this link.
 - add a href AND a scrollTo containing the id to scroll to.
 ```HTML
  <a href="#idtoScrollTo" scrollTo="idtoScrollTo" class="scrollOnClick">go scroll</a>
```
 - optionally add a duration in ms
 - optionally add easing 'linear' or 'smooth'
 ```HTML
  <a href="#idtoScrollTo" duration="5000" easing="smooth" scrollTo="idtoScrollTo" class="scrollOnClick">Test</a>
```

I noticed students adding JQuety and modernizr etc, just for this effect.. This irked me.
This library is easy to include in your projects and WAY (like 30x) smaller than even slim-build-compressed jQuery.
Test the demo.html to see linear, smooth and default (smooth, 500ms) scrolls. 

[tutorial]:<https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/>
I didn't think it all up myself.. Pawel Grzybek deserves most of the credit (and gets it, see the [tutorial]).
This Tutorial is in ES6 and was the basis for the ES6 script.
Since Es6 has compatibility issues with older browsers, I translated this script to ES5 and made
a easy to use, small library (<3Kb). I left the ES6 script in, for you to look at, if you want the 
extended features, that I deemed too much. Also for people using a transpiler (a what now?) in their development stack (what the heck is a development stack??), it might be even MORE useful.
 
 * NOTE: I uncovered a little bug in Chrome's implementation of Es6, where the default-behaviour of jumping to document-fragments cannot be prevented, it does work in Es5, but if you use Es6, stick to divs, buttons and anything other than 
 ```javascript
 <a href='#id'>jump to id</a>
```
this should work, but at the time of writing hasn't been implemented in chrome correctly.

# universall usefullness as long as browserwars continue around smooth scrolling
 - This can be used as long as the scrollIntoView function is still in working Draft and
doesn't support 'smooth' as an option in most browsers.
OR
 - as Pasel Grzybek pointed out:
body {
  scroll-behavior: smooth;
}
becomes a standard supported by more browsers than just firefox
OR
 - behavior 'smooth' becomes a part of the scrollTo functionality..
OR..

# Backward compatibility & Browser support
Another great reason to use this, is backward and cross-browser compatibility without jQuery. 
Haven't tested it fully yet, but from what I used in the code I reckon it will run cross-browser all the way down to 2011.
IE9, Edge12, FF3, Chrome4, Safari3.1, Opera 10.1.. If anyone tests this and finds otherwise, please let me know.
Mobile browser suppport is great. All these browsers are newer..

# Elegant Fallback
If you use the Es5 version with links, even if the code breaks on some ancient browser, or someone has javascript disabled, it'll still work but without the scrolling.. 
I can't find it anywhere, but I remember the jumping to document-fragments with # being part of html1.2  *where I got on the HTML train, yes I'm that old. :) Patreon me to get me into a nice home..* 
Update: I am retired now.. bit early, but I thought I'd get a head start on the whole process. The traffic to the afterlife can be jammed, especially on mondays.


# HardCore Backward compatibility 
If you want support for IE9 and down, you might change the getElementsByClassname to a getElementsByTag("scroll"), which is supported from IE6+, Firefox 2+, Chrome 1+ and up as it is a DOM Core level 2 property. 
And then you should use the made up tagname like: <scroll scrollTo="test">Go to Test</scroll>..
You can just style it with CSS to look like a link, if you want..
I just found that a bit... you know nerdy, even for me.. And since I have no more clients left, who insist on anything beyong IE9, I just left it for now. But I thought I'd mention it, for people who aren't convinced yet this script can do WITHOUT jQuery.
