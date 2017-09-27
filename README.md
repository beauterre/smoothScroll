# smoothScroll
smoothScroll in vanilla JS (ES5)
- SO WITHOUT JQUERY!
by Hjalmar Snoep

[tutorial]:<https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/>
I didn't think it all up myself.. Pawel Grzybek deserves most of the credit (and gets it, see the tutorial).
This Tutorial is in ES6 and was the basis for the ES6 script.
Since Es6 has compatibility issues with older browsers, I translated this script to ES5 and made
a easy to use, small library (<3Kb). I left the ES6 script in, for you to look at, if you want the 
extended features, that I deemed too much..

# explanation
The library is easy to include in your projects and WAY (like 30x) smaller than even slim-build-compressed jQuery.
Test the demo.html to see linear, smooth and default (smooth, 500ms) scrolls.

# universall usefullness as long as browserwars continue
 - This can be used as long as the scrollIntoView function is still in working Draft and
doesn't support 'smooth' as an option in most browsers.
OR
 - like Pasel Grzybek pointed out:
body {
  scroll-behavior: smooth;
}
becomes a standard supported by more browsers than just firefox
OR
 - behavior 'smooth' becomes a part of the scrollTo functionality..
OR..
# Backward compatibility & Browser Support
Another great reason to use this, is backward compatibility. 
Haven't tested it yet, but from what I used in the code I reckon it will run cross-browser all the way up to 2013.
IE9, not sure, but it still might. If anyone tests this and finds otherwise, please let me know.
