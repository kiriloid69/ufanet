$((function(){let e=window.location.href;if(e.match(/city_code=\d+/)){let t=e.match(/city_code=\d+/)[0].match(/\d+/)[0],c=e.match(/phone=\d+/)[0].match(/\d+/)[0],n=document.querySelector(".number");null!==n&&(n.children[0].innerHTML=`+7(${t})`,n.children[1].innerHTML=c,n.setAttribute("href",`tel:+7${t}${c}`))}}));