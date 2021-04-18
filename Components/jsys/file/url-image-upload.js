const urlImageUploadTemplate = document.createElement('template');
urlImageUploadTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

input{
    width: 80%;
    padding: 5px 10px;
    margin: 2px 0 10px 0;
    box-sizing: border-box;
    background: transparent ;
    color: hsla(0, 0%, 0%, 1);
    border: 1px solid #ccc;
    font-size: 18px;
    resize: vertical;
}

::placeholder{
    color: #ababab;
}

input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.02rem rgba(0,123,255,.25);
}

img{
    height: 90px;
    width: 100px;
}

.cursor-pointer{
    cursor: pointer;
}

.close{
    position: absolute;
    right: 0;
    top: 32px;
}

.error{
    color:hsla(354, 70.3%, 44.9%, 1);
    font-size: 14px;
    margin: 2px;
}

button{
    position: absolute;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-top: 2px;
    cursor: pointer;
}

.float-right{
    float: inherit;
}
</style>

<div>
    <input id="text">
    <span class="float-right">
        <button>Add</button>
    </span>
    <span id="invalid-url" class="error"></span>
    <div id="preview"></div>
</div>
`;

class UrlImageUpload extends HTMLElement {
    #multiple;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(urlImageUploadTemplate.content.cloneNode(true));
        this.validatation = false;
        this.allowedExtensions = [];
        this.choosefiles = [];
        this.fileValidations = [];
        this.validated = true;
        this.#multiple = true;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener('click', this.validateUrl.bind(this));
    }

    static get observedAttributes() {
        return ['placeholder', 'background-color', 'text-color', 'font-size', 'value', 'validate', 'extensions', 'dispatcher', 'multiple', 'flush'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'placeholder':
                this.shadowRoot.getElementById('text').placeholder = newValue;
                break;
            case 'background-color':
                this.shadowRoot.getElementById('text').style.backgroundColor = newValue;
                break;
            case 'text-color':
                this.shadowRoot.getElementById('text').style.color = newValue;
                break;
            case 'font-size':
                this.shadowRoot.getElementById('text').style.fontSize = newValue;
                break;
            case 'value':
                this.shadowRoot.getElementById('text').value = newValue;
                break;
            case 'validate':
                this.validatation = newValue;
                break;
            case 'extensions':
                this.allowedExtensions = newValue;
                break;
            case 'dispatcher':
                this.shadowRoot.querySelector('input').setAttribute('dispatcher', `${newValue}`);
                break;
            case 'multiple':
                if (newValue == 'false') {
                    this.#multiple = false;
                }
                break;
            case 'flush':
                if (newValue) {
                    this.choosefiles = [];
                    this.shadowRoot.querySelector('input').value = '';
                    this.shadowRoot.getElementById('preview').innerHTML = '';
                }
                break;
        }
    }

    validateUrl() {
        if (!this.#multiple) {
            if (this.choosefiles.length > 0) {
                return;
            }
        }
        this.shadowRoot.getElementById('invalid-url').innerHTML = '';
        let url = this.shadowRoot.querySelector('input').value;
        try {
            new URL(url);
        } catch (e) {
            this.shadowRoot.getElementById('invalid-url').innerHTML = 'Invalid URL';
            return false;
        }
        fetch(url)
            .then(response => {
                if (response.ok) {
                    this.choosefiles.push({'url': url});
                    let index = 0;
                    for (let i = 0; i < this.choosefiles.length; i++) {
                        index = i;
                    }
                    this.imagePreview(url, index);
                } else {
                    return false;
                }
            }).catch(error => {
            return false
        });

    }

    async imagePreview(url, index) {
        const blob = await this.getImageBlob(url);
        this.choosefiles[index].blob = blob;
        let parentDiv = document.createElement("div");
        parentDiv.id = 'preview-' + index;
        let image = document.createElement("img");
        image.src = url;
        parentDiv.appendChild(image);
        parentDiv.appendChild(document.createElement("br"));
        let element = document.createElement("small");
        element.style.fontWeight = 'bold';
        element.innerText = 'File Name : ';
        parentDiv.appendChild(element);
        element = document.createElement("small");
        element.innerText = url;
        parentDiv.appendChild(element);
        parentDiv.appendChild(document.createElement("br"));
        element = document.createElement("small");
        element.style.fontWeight = 'bold';
        element.innerText = 'File Size : ';
        parentDiv.appendChild(element);
        element = document.createElement("small");
        element.innerText = this.formatBytes(blob.size);
        parentDiv.appendChild(element);
        parentDiv.appendChild(document.createElement("br"));
        element = document.createElement("small");
        element.style.fontWeight = 'bold';
        element.innerText = 'File Type : ';
        parentDiv.appendChild(element);
        element = document.createElement("small");
        element.innerText = blob.type;
        parentDiv.appendChild(element);
        parentDiv.appendChild(document.createElement("br"));
        this.fileValidations.push(true);
        if (this.validatation) {
            try {
                this.validateFile(blob.type);
            } catch (exception) {
                this.validate = false;
                element = document.createElement("small");
                element.innerText = exception;
                element.style.color = 'rgb(216, 41, 41)';
                parentDiv.appendChild(element);
                parentDiv.appendChild(document.createElement("br"));
                this.fileValidations[index] = false;
            }
        }
        element = document.createElement("a");
        element.style.fontWeight = 'bold';
        element.style.fontSize = 'smaller';
        element.style.color = '#d82929';
        element.style.cursor = 'pointer';
        element.title = 'Click to remove file';
        element.style.textDecoration = 'underline';
        element.innerText = 'Remove File?';
        element.addEventListener('click', e => {
            this.removeFile(index);
        })
        parentDiv.appendChild(element);
        parentDiv.appendChild(document.createElement("hr"));
        this.shadowRoot.getElementById('preview').appendChild(parentDiv);
        this.dispatchFiles();
    }

    async getImageBlob(url) {
        const response = await fetch(url)
        return response.blob()
    }

    removeFile(index) {
        this.fileValidations[index] = true;
        this.choosefiles[index].url = 'deleted';
        this.shadowRoot.getElementById('preview-' + index).remove();
        this.dispatchFiles();
    }

    formatBytes(a, b = 2) {
        if (0 === a) return "0 Bytes";
        const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024));
        return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
    }

    validateFile(extension) {
        if (!this.allowedExtensions.includes(extension)) {
            throw "File extension " + extension + " is not allowed. Allowed extensions are " + this.allowedExtensions;
        }
    }

    dispatchFiles() {
        let validated = this.fileValidations.includes(false);
        let files = [];
        for (let i = 0; i < this.choosefiles.length; i++) {
            if (this.choosefiles[i].url !== 'deleted') {
                files.push(this.choosefiles[i])
            }

        }
        window.dispatchEvent(new CustomEvent(this.shadowRoot.querySelector('input').getAttribute('dispatcher'), {
            bubbles: true,
            detail: {
                'validated': !validated,
                'value': files
            }
        }));
    }
}

window.customElements.define('url-image-upload', UrlImageUpload);
export default UrlImageUpload;
