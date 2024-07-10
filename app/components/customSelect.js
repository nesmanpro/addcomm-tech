import items from './batches.js';
import msnNumbs from './msnNumbers.js';
import graphics from './chartGraphic.js';
import { getClients } from '../utils/getClients.js';


const clients = getClients();
let x, i, j, l, ll, selElement, a, b, c;


x = document.getElementsByClassName('custom-select');
l = x.length;

for (i = 0; i < l; i++) {
    selElement = x[i].getElementsByTagName('select')[0];
    ll = selElement.length;

    a = document.createElement('div');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElement.options[selElement.selectedIndex].innerHTML;

    x[i].appendChild(a);

    b = document.createElement('div');
    b.setAttribute('class', 'select-items select-hide');
    for (j = 1; j < ll; j++) {

        c = document.createElement('div');
        c.innerHTML = selElement.options[j].innerHTML;

        c.addEventListener('click', function (e) {

            let y, i, k, s, h, sl, yl;

            s = this.parentNode.parentNode.getElementsByTagName('select')[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0; i < sl; i++) {

                if (s.options[i].innerHTML == this.innerHTML) {

                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;

                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;

                    for (k = 0; k < yl; k++) {

                        y[k].removeAttribute("class");
                    }

                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();

        });

        b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function (e) {

        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");

    });
}

function closeAllSelect(elmnt) {

    let x, y, i, xl, yl, arrNo = [];

    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");

    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {

        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }

    for (i = 0; i < xl; i++) {

        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}


const applyBtn = document.getElementById('apply-btn');
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
    items('');
    msnNumbs('');
    graphics('');
})

applyBtn.addEventListener('click', () => {

    const categorySelect = document.getElementById('category')
    const selectedValue = parseInt(categorySelect.value);

    const filterClientsByDate = clients.filter(client => {

        const clientDate = new Date(client.fecha);
        const today = new Date();

        const difference = today - clientDate;
        const dateSince = Math.floor(difference / (1000 * 60 * 60 * 24));
        return dateSince < selectedValue;
    })

    items(filterClientsByDate);
    msnNumbs(filterClientsByDate);
    graphics(filterClientsByDate, selectedValue);

})



document.addEventListener("click", closeAllSelect);