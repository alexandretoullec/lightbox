class Lightbox {
    static init () {
        //select all a ands by jpg or png
        const link = document.querySelectorAll('a[href$=".png"],a[href$=".jpg"],a[href$=".jpeg"]')
            .forEach(link => link.addEventListener("click", e => {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('href'))
            }))
    }

    
    /**
     * 
     * @param {string} url URL de l'image 
     */


    constructor(url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    loadImage (url) {
        const image = new Image()

        image.onload = function(){
            
        }

        image.src = url
    }

/**
 * 
 * @param {string} url URL de l'image
 * @return(HTMLElement) 
 */

    buildDOM (url) {
        const dom = document.createElement('div');
        dom.classList.add('lightbox')
        dom.innerHTML = 
        `
        <button class="lightbox__close">Close</button>
        <button class="lightbox__next"></i>Next</button>
        <button class="lightbox__prev"></i>Previous</button>
        
        <div class="lightbox__container">
            <div class="lightbox__loader"></div>
        </div>
        `
        return dom;
    }
}

Lightbox.init()


/* <div class="lightbox">
    <button class="lightbox__close">Close</button>
    <button class="lightbox__next"></i>Next</button>
    <button class="lightbox__prev"></i>Previous</button>
    
    <div class="lightbox__container">
      <img src="https://picsum.photos/900/1800" alt="">
    </div>

  </div> */