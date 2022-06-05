document.querySelector('#top').addEventListener('click', e => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

const price = {
    "10000" : {
        basic_price: "600",
        normal_price: "1,600"
    },
    "15000" : {
        basic_price: "850",
        normal_price: "1,850"
    },
    "20000" : {
        basic_price: "1,000",
        normal_price: "2,000"
    },
    "25000" : {
        basic_price: "1,100",
        normal_price: "2,100"
    },
    ">25000" : {
        basic_price: "1,500",
        normal_price: "2,500"
    }
}



function btn_price_toggle (user, e){
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    document.querySelector('#basic_user').innerHTML = `${user} <sub class="fw-b">位</sub>`;
    document.querySelector('#basic_price').innerHTML = `${price[user]['basic_price']} <sub class="fw-b">TWD</sub>`;
    document.querySelector('#normal_user').innerHTML = `${user} <sub class="fw-b">位</sub>`;
    document.querySelector('#normal_price').innerHTML = `${price[user]['normal_price']} <sub class="fw-b">TWD</sub>`;
}

function que_toggle (que_num){
    const element = document.getElementById(`que_${que_num}`);
    element.classList.toggle('active');
}