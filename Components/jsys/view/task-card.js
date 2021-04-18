const taskCard = document.createElement('template');
taskCard.innerHTML = `
<style>
    .box {
        width: 270px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2)
    }

    .task {
        text-align: center;
        height: 16px;
        width: 45px;
        padding-top: 6px;
        font-weight: bold;
    }

    .name {
        font-size: 20px;
        color: #464e56;
        font-weight: 600;
        text-align: left;
        padding: 8px;
        margin-top: 2px;
    }

    .detail {
        font-size: 12px;
        font-weight: 500;
        color: #868e94;
        text-align: left;
        width: 140px;
        margin: 0;
    }

    .vl {
        border-left: 4px solid red;
        height: 31px;
    }

    #mydiv {
        position: absolute;
        z-index: 9;
        text-align: center;
        height: 100px;
        width: 220px;
        cursor: move;
    }

    hr{
        border-top: 1px solid;
        opacity: 0.2;
    }
</style>
<body>

<div id="mydiv">
    <div class="">
        <div class="box">
            <div class="header vl">
                <div class="task">#3456</div>
                <hr>
            </div>
            <div>
                <h3 class="name">Patient onboarding specialist can view the report</h3>
                <p class="detail" style="height: 8px">Assigned to:</p>
            </div>
            <hr>
            <div>
                <p class="detail">Estimate Completion Time:</p>
            </div>
        </div>
    </div>
</div>

<script>
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
</script>`;

export class TaskCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(taskCard.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['text', 'background-color', 'text-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'text':
                this.shadowRoot.querySelector('h3').innerHTML = newValue;
                break;
            case 'background-color':
                this.shadowRoot.querySelector('.box').style.backgroundColor = newValue;
                break;
            case 'text-color':
                this.shadowRoot.querySelector('h3').style.color = newValue;
                break;
        }
    }
}

window.customElements.define('task-card', TaskCard);
