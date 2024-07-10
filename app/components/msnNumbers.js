
const mailNumbs = document.getElementById('email__details');
const smsNumbs = document.getElementById('sms__details');
const printNumbs = document.getElementById('print__details');


const msnNumbs = (clients) => {




    mailNumbs.innerHTML = '';
    smsNumbs.innerHTML = '';
    printNumbs.innerHTML = '';

    if (clients) {

        const numbers = clients;

        const totalEmails = numbers.reduce((acc, numb) => {
            return acc + numb.type.email
        }, 0)

        const totalSms = numbers.reduce((acc, numb) => {
            return acc + numb.type.sms
        }, 0)

        const totalPrint = numbers.reduce((acc, numb) => {
            return acc + numb.type.print
        }, 0)

        const mailItem = document.createElement('div');
        mailItem.classList.add('card__numbers');
        mailItem.classList.add('email__numbers');
        mailItem.innerHTML = `
            <div id="email__cont">
                <div class="email__title type__title subtitle">Emails</div>
                <div class="email__numbers card__numbers">

                    <div class="email__total type__total">${totalEmails}</div>
                    <div class="type__percent positive__percent"><i class="fa-solid fa-arrow-up"></i> 13%</div>
                </div>
            </div>
        `;

        const smsItem = document.createElement('div');
        smsItem.classList.add('card__numbers');
        smsItem.classList.add('sms__numbers');
        smsItem.innerHTML = `
            <div id="sms__cont">
                <div class="sms__title type__title subtitle">SMS</div>
                <div class="sms__numbers card__numbers">

                    <div class="sms__total type__total">${totalSms}</div>
                    <div class="type__percent ${totalSms > 2200 ? 'negative__percent' : 'positive__percent'}"><i class="fa-solid fa-arrow-up"></i> ${totalSms > 2200 ? '11' : '8'}%</div>
                </div>
            </div>
        `;

        const printItem = document.createElement('div');
        printItem.classList.add('card__numbers');
        printItem.classList.add('print__numbers');
        printItem.innerHTML = `
            <div id="print__cont">
                <div class="print__title type__title subtitle">Print</div>
                <div class="print__numbers card__numbers">

                    <div class="print__total type__total">${totalPrint}</div>
                    <div class="type__percent ${totalPrint < 2200 ? 'negative__percent' : 'positive__percent'}"><i class="fa-solid fa-arrow-up"></i> ${totalPrint < 2200 ? '15' : '13'}%</div>
                </div>
            </div>
        `;


        mailNumbs.append(mailItem);
        smsNumbs.append(smsItem);
        printNumbs.append(printItem);

    } else {
        const mailItem = document.createElement('div');
        mailItem.classList.add('card__numbers');
        mailItem.classList.add('email__numbers');

        mailItem.innerHTML = `
            <div id="email__cont">
                <div class="email__title type__title subtitle">Emails</div>
                <div class="email__numbers card__numbers">

                    <div class="email__total type__total">0</div>
                    <div class="type__percent positive__percent"><i class="fa-solid fa-arrow-up"></i> 0%</div>
                </div>
            </div>
        `;

        const smsItem = document.createElement('div');
        smsItem.classList.add('card__numbers');
        smsItem.classList.add('sms__numbers');
        smsItem.innerHTML = `
            <div id="sms__cont">
                <div class="sms__title type__title subtitle">SMS</div>
                <div class="sms__numbers card__numbers">

                    <div class="sms__total type__total">0</div>
                    <div class="type__percent positive__percent"><i class="fa-solid fa-arrow-up"></i> 0%</div>
                </div>
            </div>
        `;

        const printItem = document.createElement('div');
        printItem.classList.add('card__numbers');
        printItem.classList.add('print__numbers');
        printItem.innerHTML = `
            <div id="print__cont">
                <div class="print__title type__title subtitle">Print</div>
                <div class="print__numbers card__numbers">

                    <div class="print__total type__total">0</div>
                    <div class="type__percent positive__percent"><i class="fa-solid fa-arrow-up"></i> 0%</div>
                </div>
            </div>
        `;

        mailNumbs.append(mailItem);
        smsNumbs.append(smsItem);
        printNumbs.append(printItem);
    }

}

export default msnNumbs;