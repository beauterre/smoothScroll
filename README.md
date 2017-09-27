# smoothScroll-Es5.js
smoothScroll in vanilla JS (ES5)
 - WITHOUT JQUERY!
 - Made especially for Students of the MediaCollege Amsterdam by Hjalmar Snoep
 - LICENSE: Use anywhere, credit, don't credit, I really don't care

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

The library is easy to include in your projects and WAY (like 30x) smaller than even slim-build-compressed jQuery.
Test the demo.html to see linear, smooth and default (smooth, 500ms) scrolls.

[tutorial]:<https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/>
I didn't think it all up myself.. Pawel Grzybek deserves most of the credit (and gets it, see the [tutorial]).
This Tutorial is in ES6 and was the basis for the ES6 script.
Since Es6 has compatibility issues with older browsers, I translated this script to ES5 and made
a easy to use, small library (<3Kb). I left the ES6 script in, for you to look at, if you want the 
extended features, that I deemed too much. Also for people using a transpiler in their development stack, it might be even MORE useful.
 
 * NOTE: I uncovered a little bug in Chrome's implementation of Es6, where the default-behaviour of jumping to document-fragments cannot be prevented, it does work in Es5, but if you use Es6, stick to divs, buttons and anything other than 
 ```javascript
 <a href='#id'>jump to id</a>
```

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
If you use the Es5 version with links, even if the code breaks on some ancient browser, or someone has javascript disabled, it'll still work without the scrolling.. 
I can't find it anywhere, but I remember the jumping to document-fragments with # being part of html1.2 where I got on the HTML train, yes I'm that old. :) Patreon me to get me into a nice home..

# HardCore Backward compatibility 
If you want support for IE9 and down, you might change the getElementsByClassname to a getElementsByTag("scroll"), which is supported from IE6+, Firefox 2+, Chrome 1+ and up as it is a DOM Core level 2 property. 
And then you should use the made up tagname like: <scroll scrollTo="test">Go to Test</scroll>..
You can just style it with CSS to look like a link, if you want..
I just found that a bit... you know nerdy, even for me.. And since I have no more clients left, who insist on anything beyong IE9, I just left it for now. But I thought I'd mention it, for people who aren't convinced yet this script can do WITHOUT jQuery.
