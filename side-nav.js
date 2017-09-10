

/**
 * This is the class that controls each instance of your custom element.
 */
class SideNav extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return ["open"];
    };

    constructor() {
        super();
        const openCloseStyle = this.hasAttribute("open") ? "0" : "100";
        this.style.cssText = `
            display: block;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            padding: 20px;
            width: 200px;
            transition: transform 0.3s ease;
            will-change: transform;
            transform: translateX(-${openCloseStyle}%);
        `;
        
    }

    close() {
        this.removeAttribute('open');
    }

    open() {
        this.setAttribute('open', '');
    }

    _close() {
        this.style.transform =  "translateX(-100%)";
    }

    _open() {
        this.style.transform = "translateX(0%)";
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        
    }
    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {Mixed} oldValue the previous value of the attribute
     * @param {Mixed} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
        if(this.hasAttribute("open")) {
            this._open();
        }else {
            this._close();
        }
    }
}

customElements.define("side-nav", SideNav);
