$(document).ready((function(){let t=null,a=null,n=null,e=null;const o=`\n         <form id="formContract">\n            <div class="form">\n                <div class="form__side form__side--left">\n                    <div class="placeholder">\n                        <input type="text" name="paramCity" class="placeholder__input" autocomplete="new-password" readonly="" value=${$("#hiddenContractAjax").attr("data-city-name")} />\n                    </div>\n                    <div class="placeholder">\n                        <span class="placeholder__text">Номер договора</span>\n                        <input class="placeholder__input" id="numContract" maxlength="14" name="contractTitle" type="text" value="" />\n                    </div>\n                </div>\n            </div>\n            <div class="group-btns">\n                <button type="button" class="search" id="btnSearchContract">Найти</button>\n            </div>\n        </form>`;function r(){$(".payment-form__body.payment-form__body--primary").remove(),$(".payment-form__header").after('\n        <div class="payment-form__body payment-form__body--primary">\n            <div class="payment-form__body__tabs">\n                <button type="button" id="btnShowSearchByAddress" class="active">По адресу</button>\n                <button type="button" id="btnShowSearchByContract" class="">По номеру договора</button>\n            </div>\n        \n            <form id="hiddenAddresses">\n                <div class="form">\n                    <div class="form__side form__side--left">\n                        <div class="form__param">\n                            <select data-placeholder="Город" id="id_city" name="city" data-ajax--cache\n                                    data-html required tabindex="-1" class="select2-hidden-accessible"\n                                    aria-hidden="true">\n                            </select>\n                        </div>\n                         <div class="form__param">\n                             <select data-minimum-input-length="2"\n                                     data-placeholder="Улица" id="id_address_pay" name="address_pay"\n                                     data-ajax--cache data-html required tabindex="-1"\n                                     class="select2-hidden-accessible" aria-hidden="true">\n                             </select>\n                        </div>\n                    </div>\n                    <div class="form__side form__side--right">\n                        <div class="form__param">\n                            <select data-minimum-input-length="1" data-placeholder="Дом/корпус" id="id_house_pay" name="house_pay"\n                                    data-ajax--cache data-html required tabindex="-1"\n                                    class="select2-hidden-accessible" aria-hidden="true">\n                            </select>\n                        </div>\n        \n        \n                        <div class="placeholder form__param">\n                            <span class="placeholder__text">Квартира</span>\n                            <input class="placeholder__input" data-placeholder="Квартира" id="numContract"\n                                   maxlength="5" name="apartment_pay" type="text" required>\n                        </div>\n                    </div>\n                </div>\n        \n                <div class="group-btns">\n                    <button type="button" class="search" id="btnSearchAddresses">Найти</button>\n                </div>\n            </form>\n        </div>'),$("#id_city").select2({allowClear:!0,ajax:{type:"GET",url:"/api/v0/address/city/",dataType:"json",delay:250,cache:!0,processResults:function({detail:t}){return{results:t}},data:function(t){return{search:t.term}}}}),$.ajax({type:"GET",url:`/api/v0/address/city/?alias=${$("#hiddenContractAjax").attr("data-city-alias")}`}).then((function({detail:t}){var a=new Option(t[0].text,t[0].id,!0,!0);$("#id_city").append(a).trigger("change"),$("#id_city").trigger({type:"select2:select",params:{data:t}})})),$("#id_city").on("select2:select",(function(a){t=Array.isArray(a.params.data)?a.params.data[0]:a.params.data})),$("#id_address_pay").select2({allowClear:!0,ajax:{type:"GET",url:"/api/v0/address/street/",dataType:"json",delay:250,cache:!0,processResults:function({detail:t}){return{results:t}},data:function(a){return{city_id:t.id,part_street:a.term}}}}),$("#id_address_pay").on("select2:select",(function(t){a=t.params.data})),$("#id_house_pay").select2({allowClear:!0,ajax:{type:"GET",url:"/api/v0/address/house/",dataType:"json",delay:250,cache:!0,processResults:function({detail:t}){return{results:t}},data:function(t){return{street_id:a.id,number:t.term}}}}),$("#id_house_pay").on("select2:select",(function(t){n=t.params.data}))}function c(t){return $(".contracts__list").append(`<a href="#" class="contract contract--els" data-hash="${t.contractHashTitle}">\n                    <div class="contract-data">\n                        <div class="contract-name">Единый лич. счет <span class="contract-number" id="numContract">${t.contractActTitle}</span></div>\n                        <div class="contract-owner">Инициалы владельца: ${t.owner} <br/> По адресу: ${t.address}\n                        </div>\n                    </div>\n                </a>`)}function s(a){const e="address"===a?`/api/v0/contracts/address/?external_id_city=${t.external_id}&external_id_house=${n.external_id}&flat=${$("#numContract").val()}`:`/api/v0/contracts/?alias_city=${$("#hiddenContractAjax").attr("data-city-alias")}&contract_title=${$("#numContract").val()}`;$.ajax({type:"GET",url:e,success:function({detail:t}){$(".payment-form__body.payment-form__body--primary").hide(),$(".payment-form__body.payment-form__body--primary").after('\n        <div class="payment-form__body payment-form__body--contracts">\n            <p>Выбери договор для оплаты:</p>\n            <div class="contracts__list"></div>\n            <div class="group-btns">\n                <button type="button" class="btn-cancel cancel" id="btnGetAwayAddress">\n                    Отмена\n                </button>\n            </div>\n        </div>'),"address"===a?$.each(t.t_contracts,(function(t,a){c(a)})):c(t)},error:function(t,a){alert("Договор не найден"),console.log(t.status),console.log(a)}})}function d(t){var a=t.closest($("div.contract-recommendation")).find($("button.pay"));parseInt(t.val())<10||""===t.val()?(a.css("background-color","#c1c1c1").attr({disabled:"disabled",title:"Минимальная сумма оплаты - 10 руб."}),$(t).next(".validation-error").remove(),$(t).after("<p class='validation-error'>Минимальная сумма оплаты - 10 руб.</p>")):(a.css("background-color","#ffca0e").removeAttr("disabled title"),$(t).next(".validation-error").remove())}$("#btnShowPaymentForm").click((function(){r()})),$("#paymentForm").on("click","#btnSearchAddresses",(function(){s("address")})),$("#paymentForm").on("click","#btnSearchContract",(function(){s("contractNumber")})),$("#paymentForm").on("click","#btnShowSearchByAddress",(function(){$(this).addClass("active"),$("#btnShowSearchByContract").removeClass("active"),r()})),$("#paymentForm").on("click","#btnShowSearchByContract",(function(){$(this).addClass("active"),$("#btnShowSearchByAddress").removeClass("active"),t=null,$("#hiddenAddresses").replaceWith(o)})),$("#paymentForm").on("click","#btnGetAwayAddress",(function(){$(".payment-form__body.payment-form__body--primary").show(),$(".payment-form__body.payment-form__body--contracts").remove(),$(".payment-form__body.payment-form__body--about-contract")&&$(".payment-form__body.payment-form__body--about-contract").remove()})),$("#paymentForm").on("click",".contract.contract--els",(function(){e=$(this).data("hash");const t=$(this).children().clone();$.ajax({type:"GET",url:`/api/v0/contracts/pay/?hash=${e}`,success:function({detail:a}){$(".payment-form__body.payment-form__body--contracts").replaceWith('\n        <div class="payment-form__body payment-form__body--about-contract">\n            <div class="contract">\n                <img src="/static/core/img/icons/icon-check.svg" alt="" />\n                <div class="contracts__list"></div>\n                <div class="contract-recommendation">\n                    <form id="hiddenPayContract">\n                        <p>Рекомендуемая сумма оплаты:</p>\n                        <input type="text" id="contractSumm-js" name="contractSumm" value="">\n                        <p>Почта для получения электронного чека:</p>\n                        <input type="email" id="contractEmail-js" name="contractEmail" />\n                    </form>\n                    <div class="offerta">\n                        <b>*</b>нажимая кнопку «Оплатить», Вы соглашаетесь с <a href="">условиями Оферты о предоставлении физическим лицам возможности оплаты услуг связи АО «Уфанет» банковской картой.</a>\n                        Минимальная сумма платежа - 10 руб.\n                    </div>\n                    <div class="group-btns">\n                        <button type="button" id="btnPay" class="btn-pay pay" disabled="disabled" title="Минимальная сумма оплаты - 10 руб."\n                            style="background-color: #c1c1c1">Оплатить*</button>\n                        <button type="button" class="btn-cancel cancel" id="btnGetAwayAddress">Отмена</button>\n                    </div>\n                </div>\n            </div>\n        </div>'),$(".payment-form__body.payment-form__body--about-contract .contracts__list").append(t),$("#contractSumm-js").val(a[0].cost),d($("#contractSumm-js"))},error:function(t,a){console.log(t.status),console.log(a)}})})),$("#paymentForm").on("click","#btnPay",(function(){const t=$("#contractSumm-js").val(),a=$("#contractEmail-js").val();$.ajax({type:"GET",url:`/api/v0/pay/?hash=${e}&sum=${t}&email=${a}`,success:function({detail:{url:t}}){window.location.href=t,e=null},error:function(t,a){console.log(t.status),console.log(a)}})})),$("#paymentForm").on("hide.bs.modal",(function(){$(".payment-form__body.payment-form__body--contracts").remove(),$(".payment-form__body.payment-form__body--about-contract").remove()})),$(document).on("click","#btnOfferta",(function(){var t=$("#hiddenContractAjax").attr("data-city-offerta");$("div.payment-form__body").hide(),$("div.payment-form__footer").hide(),$("div.payment-form__header").after('<div class="payment-form__body payment-form__body--offerta"><p>Публичная оферта</p><div id="offerta"><p>Нажимая кнопку «Оплатить», Вы соглашаетесь <a href="" style="color: #2e70a2;">с условиями Оферты о предоставлении физическим лицам возможности оплаты услуг связи АО «Уфанет» банковской картой.</a></p><p>После подверждения суммы вы перейдете на страницу платежной формы процессингового центра Тинькофф банк,обеспечивающего проведение платежей, для заполнения данных о Вашей карте. </p> <p>Информация о карте передается по защищенному протоколу SSL и является недоступной для АО «Уфанет».</p></div><div class="group-btns"><button type="button" class="btn-cancel cancel" id="btnGoAway">Назад</button></div></div>'),$("div.offerta a").attr("href",t),$("div.payment-form__body--offerta").show()})),$(document).on("click","#btnGoAway",(function(){$(".payment-form__body--offerta").remove(),$(".payment-form__body--primary").show(),$(".payment-form__footer").show(),r()})),$(document).on("keyup","#numContract",(function(){$(this).val().length?$(this).prev("span.placeholder__text").hide():$(this).prev("span.placeholder__text").show()})),$(document).on("click","span.placeholder__text",(function(){$(this).next().focus()})),$(document).on("keyup","#contractSumm-js",(function(t){1!==$(this).val().length||48!==t.keyCode&&96!==t.keyCode||$(this).val(""),$(this).val($(this).val().replace(/^\s|[a-zA-Zа-яА-Я`~!@#№$%^&*();_=+\\|\[\]{};:'",.<>\/?]{1,}/gi,"")),d($(t.target))})),$(document).on("keyup","#contractEmail-js",(function(t){var a=/(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$)|(^$)/.test(t.target.value.trim()),n=$(t.target).closest($("div.contract-recommendation")).find($("button.pay"));a?(n.css("background-color","#ffca0e").removeAttr("disabled"),$(t.target).next(".validation-error").remove()):(n.css("background-color","#c1c1c1").attr({disabled:"disabled"}),$(t.target).next(".validation-error").remove(),$(t.target).after("<p class='validation-error'>Не верно указана почта</p>"))}))}));