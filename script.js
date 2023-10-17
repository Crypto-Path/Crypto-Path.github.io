const prosodySection = document.querySelector("#prosody");
const prosodyImages = document.querySelectorAll("#prosody .prosody-images .prossc");
const fourLetterWordsSection = document.querySelector("#four-letter-words");
const fourLetterWordsImages = document.querySelectorAll("#four-letter-words .four-letter-words-images .flwsc");
const lim = 500

let prosodyImagesVisible = false;
let fourLetterWordsImagesVisible = false;

window.addEventListener("scroll", () => {
    const prosodySectionTop = prosodySection.getBoundingClientRect().top;
    const fourLetterWordsSectionTop = fourLetterWordsSection.getBoundingClientRect().top;

    if (prosodySectionTop < lim && !prosodyImagesVisible) {
        prosodyImages.forEach((image, index) => {
            setTimeout(() => {
                image.classList.add("show");
            }, index * 300);
        });
        prosodyImagesVisible = true;
    } else if (prosodySectionTop > 2 * lim) {
        prosodyImages.forEach((image, index) => {
            setTimeout(() => {
                image.classList.remove("show");
            }, index * 300);
        });
        prosodyImagesVisible = false;
    }

    if (fourLetterWordsSectionTop < lim && !fourLetterWordsImagesVisible) {
        fourLetterWordsImages.forEach((image, index) => {
            setTimeout(() => {
                image.classList.add("show");
            }, index * 300);
        });
        fourLetterWordsImagesVisible = true;
    } else if (fourLetterWordsSectionTop > 2 * lim) {
        fourLetterWordsImages.forEach((image, index) => {
            setTimeout(() => {
                image.classList.remove("show");
            }, index * 300);
        });
        fourLetterWordsImagesVisible = false;
    }

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    // Check if the device is a mobile device
    if (isMobileDevice()) {
        // If it's a mobile device, remove the background image
        document.body.classList.remove("background");
    }
});