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
    e.preventDefault();
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    document.querySelector('#basic_user').innerHTML = `${user} <sub class="fw-b">位</sub>`;
    document.querySelector('#basic_price').innerHTML = `${price[user]['basic_price']} <sub class="fw-b">TWD</sub>`;
    document.querySelector('#normal_user').innerHTML = `${user} <sub class="fw-b">位</sub>`;
    document.querySelector('#normal_price').innerHTML = `${price[user]['normal_price']} <sub class="fw-b">TWD</sub>`;
}

let judge = 0;
function que_toggle (que_num){
    const element = document.getElementById(`que_${que_num}`);
    if (judge == 0){
      element.classList.add('que_active');
    }
    if(judge == que_num){
      element.classList.toggle('que_active');
    }else{ 
      document.querySelector('.que_active').classList.remove('que_active');
      element.classList.add('que_active');
    }
    judge = que_num;
}


function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
    const swiper = new Swiper("#comment-swiper", {
      /*  預設要顯示幾個卡片 */
      slidesPerView: 1,
      /* 斷點設定 */
      breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
          slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        768: {
          slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
          slidesPerView: 1
        }
      },
      /* 卡片元素的間隔 */
      spaceBetween: 16,
      pagination: {
        /* 我想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
      }
    });
  }
  
  /* 觸發自己定義的函式 */
  initSwiper();
  