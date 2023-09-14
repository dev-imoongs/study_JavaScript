
function autoSlide(){
    banner.style.transition = "transform 0.5s"
    count ++;
    temp.style.opacity = 0.3;
    if(count == 5){
        blurOut[7].style.opacity = 1;
        banner.style.transform = "translate(-" + 560 * (count + 1) + "px)";
        setTimeout(function(){
            banner.style.transition = "transform 0s"
            banner.style.transform = "translate(-560px)";
            blurOut[7].style.opacity = 0.3;
        }, 500);
        count = 0;

    }else{
        banner.style.transform = "translate(-" + 560 * (count + 1) + "px)";
    }
    countBox.innerText = count+1;
    blurOut[count+2].style.opacity = 1;
    temp = blurOut[count+2];
}

// 무한 반복
const banner = document.querySelector(".swiper-wrapper");
var count = 0;
let firstDiv = document.createElement("div");
let secondDiv = document.createElement("div");
let lastDiv = document.createElement("div");
let theLastDiv = document.createElement("div");
let countBox = document.querySelector('#count-box');


// 가장 마지막에 첫번째 배너를 이어 붙인다, 슬라이드 모션이 자연스럽게 1번으로 돌아가게 하기 위함
firstDiv.innerHTML = `
<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 560px;">
    <div>
        <button type="button" class="relative block md:w-[550px] md:h-[336px] w-full min-w-[320px] min-h-[195px] text-left md:rounded-[16px] overflow-hidden transition-all duration-500 opacity-[0.3]">
            <img src="images/001.png" class="w-full">
            <div class="absolute top-[20px] md:top-[40px] left-[20px] md:left-[32px] md:max-w-[240px]">
                <div class="overflow-hidden mb-[8px] md:mb-[12px]">
                    <p class="font_body_regular_sm md:font_body_regular_lg text-white_opacity_80 line-clamp-1" style="color: rgb(255, 255, 255);"></p>
                </div>
                <div>
                    <div class="overflow-hidden">
                        <h2 class="font_headline_bold_md md:font_headline_bold_lg content_primary_inverse keep-all line-clamp-2" style="color: rgb(255, 255, 255); animation-delay: 0.16s;"></h2>
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>
`;
banner.appendChild(firstDiv);

secondDiv.innerHTML = `
<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 560px;">
    <div>
        <button type="button" class="relative block md:w-[550px] md:h-[336px] w-full min-w-[320px] min-h-[195px] text-left md:rounded-[16px] overflow-hidden transition-all duration-500 opacity-[0.3]">
            <img src="images/002.png" class="w-full">
            <div class="absolute top-[20px] md:top-[40px] left-[20px] md:left-[32px] md:max-w-[240px]">
                <div class="overflow-hidden mb-[8px] md:mb-[12px]">
                    <p class="font_body_regular_sm md:font_body_regular_lg text-white_opacity_80 line-clamp-1" style="color: rgb(255, 255, 255);"></p>
                </div>
                <div>
                    <div class="overflow-hidden">
                        <h2 class="font_headline_bold_md md:font_headline_bold_lg content_primary_inverse keep-all line-clamp-2" style="color: rgb(255, 255, 255); animation-delay: 0.16s;"></h2>
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>
`;
banner.appendChild(secondDiv);

// 가장 첫번째에 마지막 배너를 이어 붙인다, 이전 버튼 클릭 시 슬라이드 모션이 자연스럽게 6번으로 돌아가게 하기 위함
lastDiv.innerHTML = `
<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 560px;">
    <div>
        <button type="button" class="relative block md:w-[550px] md:h-[336px] w-full min-w-[320px] min-h-[195px] text-left md:rounded-[16px] overflow-hidden transition-all duration-500 opacity-[0.3]">
            <img src="images/004.png" class="w-full">
            <div class="absolute top-[20px] md:top-[40px] left-[20px] md:left-[32px] md:max-w-[240px]">
                <div class="overflow-hidden mb-[8px] md:mb-[12px]">
                    <p class="font_body_regular_sm md:font_body_regular_lg text-white_opacity_80 line-clamp-1" style="color: rgb(255, 255, 255);"></p>
                </div>
                <div>
                    <div class="overflow-hidden">
                        <h2 class="font_headline_bold_md md:font_headline_bold_lg content_primary_inverse keep-all line-clamp-2" style="color: rgb(255, 255, 255); animation-delay: 0.16s;"></h2>
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>
`;
banner.insertBefore(lastDiv, document.querySelector(".swiper-wrapper>.swiper-slide"));

theLastDiv.innerHTML = `
<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 560px;">
    <div>
        <button type="button" class="relative block md:w-[550px] md:h-[336px] w-full min-w-[320px] min-h-[195px] text-left md:rounded-[16px] overflow-hidden transition-all duration-500 opacity-[0.3]">
            <img src="images/005.png" class="w-full">
            <div class="absolute top-[20px] md:top-[40px] left-[20px] md:left-[32px] md:max-w-[240px]">
                <div class="overflow-hidden mb-[8px] md:mb-[12px]">
                    <p class="font_body_regular_sm md:font_body_regular_lg text-white_opacity_80 line-clamp-1" style="color: rgb(255, 255, 255);"></p>
                </div>
                <div>
                    <div class="overflow-hidden">
                        <h2 class="font_headline_bold_md md:font_headline_bold_lg content_primary_inverse keep-all line-clamp-2" style="color: rgb(255, 255, 255); animation-delay: 0.16s;"></h2>
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>
`;
banner.insertBefore(theLastDiv, document.querySelector(".swiper-wrapper>.swiper-slide"));

// 첫번째 배너는 6번이니까 왼쪽으로 한 번 밀어서 1번 보이게 함.
banner.style.transform = "translate(-560px)";

// 4초마다 슬라이드 이동
var inter = setInterval(autoSlide, 4000);

// 버튼을 광클하지 못하게 막아주는 FLAG
var numberButtonCheck = true;
const blurOut = document.querySelectorAll(".swiper-slide button[type=button]");
let temp = blurOut[count+2];
blurOut[2].style.opacity = 1;

// 이전 버튼, 다음 버튼 구현
const buttons = document.querySelectorAll("#button-container>button[type=button]");
var buttonCheck = true;
buttons.forEach((button, i) => {
    button.addEventListener("click", function(){
        if(buttonCheck){
            temp.style.opacity = 0.3;
            buttonCheck = false;
            clearInterval(inter);
            banner.style.transition = "transform 0.5s"
            let buttonType = i;
            if(buttonType == 0){
                count--;
                if(count == -1){
                    blurOut[1].style.opacity = 1;
                    banner.style.transform = "translate(0px)";
                    setTimeout(function(){
                        banner.style.transition = "transform 0s"
                        banner.style.transform = "translate(-2800px)";
                        blurOut[1].style.opacity = 0.3;
                    }, 500);
                    count = 4;
                    blurOut[2].style.opacity = 0.3;
                }else{
                    banner.style.transform = "translate(-" + 560 * (count + 1) + "px)";
                }
            }else{
                count++;
                if(count == 5) {
                    blurOut[7].style.opacity = 1;
                    banner.style.transform = "translate(-" + 560 * (count + 1) + "px)";
                    setTimeout(function(){
                        banner.style.transition = "transform 0s"
                        banner.style.transform = "translate(-560px)";
                        blurOut[7].style.opacity = 0.3;
                    }, 500);
                    count = 0;
                    blurOut[6].style.opacity = 0.3;
                }else{
                    banner.style.transform = "translate(-" + 560 * (count + 1) + "px)";
                }
            }
            blurOut[count + 2].style.opacity = 1;
            temp = blurOut[count + 2];
            countBox.innerText = count+1;
            inter = setInterval(autoSlide, 4000);
            setTimeout(function(){
                buttonCheck = true;
            }, 500);
        }
    });
});


