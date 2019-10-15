# The Planets

The remit of the assignment is to write a custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality that produces relevant responses dependant on users' actions.

## User Experience
 
 The Beatles wanted a website developed to cater for both current and prospective fans, alike. In doing so, they wanted their webpage to be visually appealing whilst allowing visitors an opportunity to listen, and watch, selected songs from their back catalogue. Furthermore, the band wanted to highlight the fact that they are still performing regularly and are available for hire.
 
 I wanted the website to provide a minimalist landscape whilst still allowing the user to access all of the key components with ease and with minimal instruction.
 
 The focus of the website was on the band's artistic flare, to ensure a contrast in colours and tones between sections which, in turn, allowed for ease of identification of those sections as well as provide a visually appealing space.
 
 The balsamiq wireframe used for this project can be accessed in the wireframes folder of the GitHub repository (Link below).

## Features

- Home
    - I wanted the homepage to provide a striking image of the band, identifying who the band were, and offer clear and simple navigation options to the rest of the site. In addition, I wanted to draw the user to additional material on the site by making the background image only 90% of the view height.
    - An alternative image is used as screen resolution reduces so as to provide a clear indication of the focus of the website.
- About
    - No heading was used so as to keep with the minimalist theme of the site and a colourful background offered contrast from the black & white homepage image. This offered an indication that the user was in a new section.
    - An opaque background was used for the 'about' text so as to still allow the user access to the vivid image of the band in the background.
    - As screen size reduces, both the font size and the text area changes to ensure an appropriate delivery of material whilst still offering a visually appealing background.
- Video
    - Again, a black & white background was used to contrast against the colourful 'about' section background and indicate to the user that they are now in another section.
    - No heading was used again as I wanted the background image to be brought into focus.
    - The video itself was placed centrally so the user could not miss it.
    - The video remains central with a reduction in screen size.
    - As screen size reduces, an alternative background image is used so as to prevent the initial background image becoming unidentifiable.
- Music
    - Each of the band's 15 albums are showcased. Upon pressing the play icon, the user is played a song from that album. Pressing the pause icon pauses the playback of that song.
    - With a change in screen size comes a change in both the layout of the album covers and the size of the play & pause icons which better suit smaller screen resolutions.
    - Due to the colourful and diverse nature of the album cover mosaic, there was no requirement for a section background as, with the previous segments, the colours offered suitable contrast to the black & white background image of the 'video' section and therefore provided the user with an indication that they were in a new section.
    - Due to the size of the images and the number of albums, this is the only segment whereby the section is not viewed with 90% of the view height as the continuous flow of albums should encourage the user to scroll further down the page.
- Contact
    - As with all the sections that came before, I wanted a focus to be on the imagery associated with the section. As a result, the header alluding to the contact box was kept brief and to the point.
    - Again, an opaque text box was used so as to not detract too much from the background image.
    - The contact box takes up minimal real estate on the page and the submit button is green, paying homage to the colour of the apple that was used as an icon for The Beatles' own record label.
    - The functions of each box work as intended and provide suitable feedback when not completed correctly.
    - Both the catch-line and contact segments adjust accordingly with varying screen sizes.
- Navbar
    - The navigation bar remains fixed when scrolling through the entire webpage allowing easy access to each section.
    - At smaller screen sizes the navigation bar collapses to a burger icon so as to not take up too much room on the screen.
- Footer
    - As with the navigation bar, the footer offers links to each section of the webpage as well as social media sites.
    - Font size, footer content and arrangement alter as screen size reduces allowing for a more user-friendly experience.
- Backgrounds
    -  As well as the black & white / colour contrast between sections, black & white images remain fixed to add a secondary indication that the user is entering or leaving a specific section.

### Existing Features

- Navbar - Links to specific sections of the webpage change colour when hovered (Colour and speed consistent in all site hover elements) and clicking on 'The Beatles' will return to homepage. At small screen sizes, navbar menu collapses, and when accessed, will automatically collapse when links is clicked. Hover elements are removed at smaller screen sizes due to the touch screen nature of devices.
- Background - The backgrounds of 'homepage' and 'video' sections change at smaller screen sizes as original picture was not suitable.
- About - The word 'contact' in the 'about' section acts as a link to the 'contact' section of the webpage. However, this feature is not highlighted other than when hovered at larger screen resolutions.
- Music - Pressing the 'play' icon on an album cover will play a song from that album. Pressing the 'pause' button will pause the song that is playing. The layout of the album covers changes as the screen size reduces so as to make it more user friendly. In addition, the size of the 'play' and 'pause' icons reduce to match the resolution.
- Contact - Font-size reduces to match the screen size. Each element is also adjusted to fit various screen sizes well.
- Footer - Each footer sub-heading acts as an anchor to each section of the webpage. These elements also change colour when hovered on at larger screen sizes. As the screen size reduces the font-size adjusts accordingly for both the sub-headings and text. At small screen sizes, the text is removed and the sub-headings are stacked centrally so as to take up minimal space. The social media links also change colour at larger screen sizes when hovered and redirect the user to the band's specific pages.

### Features Left to Implement

- As there are no headings present in any of the sections, a feature that needs adding is an 'active' element to the navbar shortcut when the user is within that section.
- A 'stop' and 'rewind' icon needs adding to each of the album covers without taking up too much space. Alternatively, the 'pause' icon could be replaced by a 'stop' icon that immediately returns the audio file to the start position.
- The video, upon playback being initiated, should increase to occupy more of the available screen. And, conversely, reduce in size once playback has ended or been stopped.
- Upon submitting an enquiry, the page currently refreshes and returns to the homepage of the website. The JavaScript required to re-direct the client to a 'Successful submission' page is beyond the compass of my current knowledge and, therefore, requires adding.

## Technologies Used

- [jQuery](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation.
- [Google Fonts](https://fonts.google.com)
    - The project uses **Google Fonts** as a source of text fonts.
- [Bootstrap CDN](https://www.bootstrapcdn.com/)
    - The project uses **Bootstrap CDN** to help with webpage structure and visual elements.
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - The project uses **HTML5** to add content and structure to the webpage.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - The project uses **CSS** to add style to the HTML5 elements.

## Testing

Throughout the development of the webpage, there was continuous testing and evaluation to ascertain whether the website functioned as planned.

The website was developed, as previously indicated, with minimalism in mind whilst drawing on the artistic side of the band and using their iconic imagery to appeal to both current and prospective fans.

The 'inspect' tool in Google Chrome was the primary testing apparatus for the website when investigating the functionality and usability of the site at various screen resolutions. Whilst developing all sections of the website I continually reverted back to this tool to ensure the product matched my expectations which then informed me as to whether further modifications were required.

In addition to 'inspect' in Google Chrome, I frequented [W3C's HTML validation](https://validator.w3.org/) service as well as [W3C's CSS validation](https://jigsaw.w3.org/css-validator/) service to ensure my code fulfilled the necessary criteria and remove any errors.

Scenarios I was concerned with whilst developing and testing my website have already been indicated in the **features** part of this READMe file.

Whilst working on the project I ran into a number of bugs that I feel have been resolved to my satisfaction. These bugs included:

1. The use of a navbar burger icon at large sizes.
2. Ensuring background images for both the homepage and video sections were appropriate for smaller screen sizes.
3. The text area sizing in the 'about' section when reducing the screen size was problematic.
4. Preventing an overlap from the video when in smaller screen sizes caused numerous issues for me when developing this part of the webpage at smaller screen sizes.
5. Applying the play and pause icons to the album covers posed an issue in ensuring they rendered appropriately at various screen sizes whilst still remaining functional.

## Deployment

The site was deployed using GitHub and utilises a single branch. Throughout the development process, at each key phase, I committed the updated files to GitHub so as to back up my work and also allow me to refer back to previous versions of my work.

The deployed site, when accessed directly from an iPad or iPhone, does not render the black & white background images as they do when using the 'inspect' tool of Google Chrome during testing. The images adjusted accordingly during testing, however, on these devices, the images remain large, slightly pixelated, and unrecognisable. This is problematic and needs addressing in future development of the website.

Deployed site URL: https://benm4ckenzie.github.io/assignment-one/
GitHub repository URL: https://github.com/benm4ckenzie/assignment-one

## Credits

### Code

- [Stack Overflow](https://stackoverflow.com/) was heavily utilised in modifying both HTML5 and CSS code to attain the desired results.

### Content
- The planetary dataset used for the interactive element of the website was copied from [NASA](https://nssdc.gsfc.nasa.gov/planetary/factsheet/).


- The music video for the 'Video' section of the website was copied from [YouTube](https://www.youtube.com/watch?v=NCtzkaL2t_Y).
- The audio files for the 'Music' section of the website was taken from my own collection.

### Media

- The photo used for the 'Homepage' section of the website was obtained from [Zastavki](https://www.zastavki.com/pictures/1680x1050/2009/Space_Solar_System_Planets_016675_.jpg).
- 
mars http://3.bp.blogspot.com/-zaGG3YKTrJc/UHH1oDEJnCI/AAAAAAAAFSc/HVxT5i8OSf4/s1600/Mars.jpg
earth http://www.solstation.com/stars/earth3am.jpg
jupiter https://3.bp.blogspot.com/-JzB2ruOjBOs/WJy8tR_tJSI/AAAAAAAABdA/26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB/s1600/jupiter_HD.jpg
neptune https://lovecraftianscience.files.wordpress.com/2014/07/neptune_full.jpg
pluto https://www.snopes.com/tachyon/2018/01/pluto_reclassified_planet_feature.jpg?fit=1200,628
saturn http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/09/saturn/17144186-1-eng-GB/Saturn.jpg
uranus https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg
mercury http://d1jqu7g1y74ds1.cloudfront.net/wp-content/uploads/2008/04/mercurycolor.jpg
venus https://static-ssl.businessinsider.com/image/58472777e02ba75e658b6ba5-2400


- The photo used for the 'About' section of the website was obtained from [Consequence of Sound](https://consequenceofsound.net/2017/04/previously-unreleased-version-of-the-beatles-sgt-peppers-lonely-hearts-club-band-unearthed-from-the-vaults-listen/).
- The photo used for the 'Video' section of the website was obtained from [SiriusXM](http://blog.siriusxm.com/from-yesterday-to-now-9-beatles-songs-that-are-often-overlooked/).
- The photo used for the 'Music' section of the website was obtained from my own collection.
- The photo used for the 'Contact' section of the website was obtained from [All4Prints](http://all4prints.com/en/portraits-iconic/1604-the-beatles-abbey-road.html).

### Acknowledgements

- I received inspiration for this project from my Father, an avid Beatles fan, who exposed me to their music from a young age. And, as a result, I became a fan, too.
# assignment-one
