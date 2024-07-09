
const msnNumbs = document.getElementById('items-container')


const msnNumbs = (clients) => {


    itemCont.innerHTML = '';

    !clients ? '' : clients.forEach(client => {

        const total = client.categoria.scheduled + client.categoria.running + client.categoria.success + client.categoria.error;

        const processed = client.categoria.success + client.categoria.error;

        const item = document.createElement('div');
        item.classList.add('batches__wrapper__item');
        item.classList.add('batches__lines');
        item.innerHTML = `
            <h3>${client.nombre}</h3>
            <h3>${client.id}</h3>
                <div class="status-badge ${client.status === 'processing' ? 'status-processing' : 'status-finished'}">
                    ${client.status}
                </div>
                <div class="completed">
                    ${processed}
                </div>
                <div class="total">
                    ${total}
                </div>
            </div>
        `;

        itemCont.append(item)
    });


}

export default msnNumbs;