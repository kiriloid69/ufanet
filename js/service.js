$(function () {
    var i = "",
        t = 0,
        e = {},
        a = 0,
        s = "";
    function d(i) {
        i.each(function () {
            var i = "";
            $(this).find("input.switch__input").prop("checked") && ((i = $(this).find("input.switch__input").attr("data-name")), (s = s + i + " + "));
        }),
            (s = s.slice(0, -3));
    }
    function c(i) {
        "feedback" === i
            ? "" !== $("#nameFeedback").val() && "" !== $("#phoneFeedback").val()
                ? $("button.js-btnSend").attr("disabled", !1)
                : $("button.js-btnSend").attr("disabled", !0)
            : "service" === i && ("" !== $("#nameOrder").val() && "" !== $("#phoneOrder").val() ? $("button.js-btnSend").attr("disabled", !1) : $("button.js-btnSend").attr("disabled", !0));
    }
    function r() {
        $(window).scrollTop() > $(document).height() - $(window).height() - ($(document).height() - $("div.calculator").offset().top) ? $("div.selected-tariff").addClass("selected-tariff--static") : $("div.selected-tariff").removeClass("selected-tariff--static");
    }
    function n() {
        $("#listServices").empty(),
            $("div.tariff-selected div.tariff__options input[data-alias]").each(function (i, t) {
                var e = $(t).get(0).dataset.alias;
                $("div.tariff-selected div.tariff__options")
                    .find("input[data-alias=" + e + "]")
                    .prop("checked")
                    ? $("#listServices").append(
                          '<div class="tariff-services__item tariff-services__item--' +
                              e +
                              '">\n<div class="tariff-services__item__label">' +
                              $("div.tariff-selected div.tariff__options")
                                  .find("label.switch-" + e + " input.switch__input")
                                  .attr("data-name") +
                              '</div>\n<div class="tariff-services__item__price">' +
                              $("div.tariff-selected div.tariff__options")
                                  .find("label.switch-" + e + " input.switch__input")
                                  .attr("data-price") +
                              " ₽</div></div>"
                      )
                    : $("div.tariff-services__item--" + e).remove();
            }),
            $('div.cashback-item input[data-option="За 2 услуги"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--cash-package">\n<div class="tariff-services__item__label">Скидка за 2 услуги</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За 2 услуги"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--cash-package").remove(),
            $('div.cashback-item input[data-option="За «Автоплатеж»"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--autopay">\n<div class="tariff-services__item__label">Скидка за «Автоплатеж»</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За «Автоплатеж»"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--autopay").remove(),
            $('div.cashback-item input[data-option="За 1 год с нами"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--1year">\n<div class="tariff-services__item__label">Скидка за 1 год с нами</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За 1 год с нами"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--1year").remove(),
            $('div.cashback-item input[data-option="За 2 года с нами"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--2year">\n<div class="tariff-services__item__label">Скидка за 2 года с нами</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За 2 года с нами"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--2year").remove(),
            $('div.cashback-item input[data-option="За мобильную связь"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--mobile-connection">\n<div class="tariff-services__item__label">За мобильную связь</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За мобильную связь"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--mobile-connection").remove(),
            $('div.cashback-item input[data-option="За «автоплатеж»"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--autopay-alter">\n<div class="tariff-services__item__label">За «автоплатеж»</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За «автоплатеж»"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--autopay-alter").remove(),
            $('div.cashback-item input[data-option="За 1 год с Уфанет"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--1year-alter">\n<div class="tariff-services__item__label">За 1 год с Уфанет</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.cashback-item input[data-option="За 1 год с Уфанет"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("div.tariff-services__item--1year-alter").remove(),
            $('div.service__devices input.active[data-type*="internettv_utvbox-1"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--device">\n<div class="tariff-services__item__label">Приставка (аренда)</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.service__devices input.active[data-type*="internettv_utvbox-1"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("#listServices div.tariff-services__item--device").remove(),
            $('div.service__devices input.active[data-type*="internettv_router-1"]').prop("checked")
                ? $("#listServices").append(
                      '<div class="tariff-services__item tariff-services__item--router">\n<div class="tariff-services__item__label">Роутер (аренда)</div>\n<div class="tariff-services__item__price">' +
                          parseInt($('div.service__devices input.active[data-type*="internettv_router-1"]').attr("data-price")) +
                          " ₽</div></div>"
                  )
                : $("#listServices div.tariff-services__item--router").remove(),
            (t = 0),
            $("#listServices div.tariff-services__item")
                .not("div.tariff-services__item--label-total")
                .find("div.tariff-services__item__price")
                .each(function () {
                    t += parseInt($(this).text());
                }),
            $("#listServices div.tariff-sum__result, div.tariff-sum--monthly div.tariff-sum__result").text(parseInt(t) + " ₽"),
            $("#listServices").prepend('<div class="tariff-services__item tariff-services__item--label-total">\n<div class="tariff-services__item__label">Ежемесячный платеж</div>\n<div class="tariff-services__item__price">' + t + " ₽</div></div>");
    }
    function p() {
        if (
            ($("#listDevices").empty(),
            ($allTariffsList = $("div.tariff")),
            (e = {}),
            $allTariffsList.each(function (i, t) {
                var a = $(t);
                a.hasClass("tariff-selected") &&
                    a.find("div.option-once input.switch__input").each(function (i, t) {
                        var a = $(t);
                        if (a.is(":checked")) {
                            var s = parseInt(a.attr("data-price")),
                                d = a.attr("data-name");
                            e[d] = s;
                        }
                    });
            }),
            $('div.service__devices input.active[data-type*="internettv_utvbox-0"]').prop("checked"))
        ) {
            var i = parseInt($('div.service__devices input.active[data-type*="internettv_utvbox-0"]').attr("data-price"));
            e["Приставка"] = i;
        }
        if ($('div.service__devices input.active[data-type*="internettv_router-0"]').prop("checked")) {
            var t = parseInt($('div.service__devices input.active[data-type*="internettv_router-0"]').attr("data-price"));
            e["Роутер"] = t;
        }
        if (
            ((function () {
                a = 0;
                for (let i in e) e.hasOwnProperty(i) && (a += e[i]);
            })(),
            a > 0)
        )
            if (($("div.tariff-sum--once").removeClass("tariff-sum--invisible"), $("#listDevices div.tariff-sum__result, div.tariff-sum--once div.tariff-sum__result").text(parseInt(a) + " ₽"), $("#listDevices").is(":empty"))) {
                $("#listDevices").prepend('<div class="tariff-services__item tariff-services__item--label-total">\n<div class="tariff-services__item__label">Разовый платеж</div>\n<div class="tariff-services__item__price">' + a + " ₽</div></div>");
                for (let i in e) e.hasOwnProperty(i) && $("#listDevices").append(`<div class="tariff-services__item tariff-services__item--device">\n<div class="tariff-services__item__label">${i}</div>\n<div class="tariff-services__item__price">${e[i]} ₽</div></div>`);
            } else for (let i in e) e.hasOwnProperty(i) && $("#listDevices").append(`<div class="tariff-services__item tariff-services__item--device">\n<div class="tariff-services__item__label">${i}</div>\n<div class="tariff-services__item__price">${e[i]} ₽</div></div>`);
        else $("div.tariff-sum--once").addClass("tariff-sum--invisible"), $("#listDevices").empty();
    }
    function v() {
        $("div.tariff-selected").find("div.option[data-cashback]").length ||
            ($("div.tariff-selected").find("label.switch-ctv input.switch__input").prop("checked") || $("div.tariff-selected").find("label.switch-utv input.switch__input").prop("checked")
                ? $("div.cashback-item").find("[data-option='За 2 услуги']").prop("checked", !0)
                : $("div.cashback-item").find("[data-option='За 2 услуги']").prop("checked", !1));
    }
    function l(i) {
        var e = 0;
        i.each(function () {
            $(this).find("input.switch__input").prop("checked") && ((e = parseInt($(this).find("input.switch__input").attr("data-price"))), (t += e));
        });
    }
    $("div.tariff button.btn").click(function () {
        var t = $(this).siblings("div.tariff__options").find("div.option:visible");
        if (((s = ""), $(t).find("div.option-info").length)) {
            $(this).siblings("div.tariff__options").find("label.switch-ctv input.switch__input").prop("checked")
                ? ($("div.wrapper-price label.switch-ctv input.switch__input").prop("checked", !0), t.find("div.detail-default").hide(), t.find("div.detail-sale").show(), t.find("label.switch-utv input.switch__input").attr("data-price", parseInt(t.find("div.detail-sale").text())))
                : ($("div.wrapper-price label.switch-ctv input.switch__input").prop("checked", !1), t.find("div.detail-sale").hide(), t.find("div.detail-default").show(), t.find("label.switch-utv input.switch__input").attr("data-price", parseInt(t.find("div.detail-default").text()))),
                $(this).siblings("div.tariff__options").find("label.switch-utv input.switch__input").prop("checked") ? $("div.wrapper-price label.switch-utv input.switch__input").prop("checked", !0) : $("div.wrapper-price label.switch-utv input.switch__input").prop("checked", !1),
                $("div.wrapper-price label.switch-ctv input.switch__input").prop("checked")
                    ? ($("div.wrapper-price label.switch-utv input.switch__input").attr("data-price", parseInt(t.find("div.detail-sale").text())),
                      $("div.wrapper-price div.option-price").removeClass("option-price--disabled"),
                      $("div.wrapper-price div.option-price-default").addClass("option-price--disabled"))
                    : ($("div.wrapper-price label.switch-utv input.switch__input").attr("data-price", parseInt(t.find("div.detail-default").text())),
                      $("div.wrapper-price div.option-price").removeClass("option-price--disabled"),
                      $("div.wrapper-price div.option-price-sale").addClass("option-price--disabled")),
                $("div.selected-tariff").addClass("selected-tariff--visible"),
                $("div.tariff button.btn").removeClass("btn--yellow").text("Выбрать тариф"),
                $(this).addClass("btn--yellow").text("Тариф выбран"),
                $("div.tariff").removeClass("tariff-selected"),
                $(this).closest("div.tariff").addClass("tariff-selected"),
                (i = $("div.tariff-selected div.tariff__name div.text:visible").text()),
                $("div.tariff-desc__name").text(i),
                d(t),
                $("div.tariff-desc__list-services").text(s),
                $(this).parent().find("div.option[data-cashback]").length
                    ? $("div.cashback-item").each(function () {
                          $(this).find("div[data-cashback]").length && $(this).addClass("cashback-item--disabled").find("input.switch__input").prop("checked", !1).attr("disabled", !0);
                      })
                    : ($("div.cashback-item").removeClass("cashback-item--disabled"), $("div.cashback-item input.switch__input").attr("disabled", !1)),
                v(),
                n(),
                p();
        } else {
            var e = [];
            $(this)
                .siblings("div.tariff__options")
                .find("div.option:visible")
                .clone()
                .each(function (i, t) {
                    e.push($(t).find("img").remove().context.innerText);
                }),
                $("div.tariff-desc__list-services").text(e.join(" + ")),
                $("div.selected-tariff").addClass("selected-tariff--visible"),
                $("div.tariff button.btn").removeClass("btn--yellow").text("Выбрать тариф"),
                $(this).addClass("btn--yellow").text("Тариф выбран"),
                $("div.tariff").removeClass("tariff-selected"),
                $(this).closest("div.tariff").addClass("tariff-selected"),
                (i = $("div.tariff-selected div.tariff__name div.text:visible").text()),
                $("div.tariff-desc__name").text(i);
            var a = $("div.tariff-selected div.tariff__price div.text").text();
            $("div.tariff-sum__result").text(parseInt(a) + " ₽");
        }
    }),
        $("#btnOpenFormServiceOrder").click(function () {
            $("div.modal--service-order").addClass("modal--open").find("form").show();
        }),
        $("button.js-btnSend").click(function () {
            var t = $(this).closest("form"),
                e = [];
            "order" === $(this).data("form-type") && e.push(i),
                $("button.js-btnSend").attr("disabled", !0),
                e.length ? $("input[name=comment]").val(e) : $("input[name=comment]").val("Заявка на обратный звонок"),
                $.ajax({
                    type: "POST",
                    url: "/order-connect/",
                    data: t.serialize(),
                    success: function () {
                        $("div.nmodal div.title").text("Ваша заявка принята!");
                    },
                    error: function () {
                        $("div.nmodal div.title").text("Произошла ошибка :(").append("<p>Пожалуйста, попробуйте ещё раз или обратитесь к нам по телефону!</p>");
                    },
                    complete: function () {
                        t.hide(), t[0].reset();
                    },
                });
        }),
        $("button.js-btnClose").click(function () {
            $("div.nmodal").removeClass("modal--open");
        }),
        $(document).click(function (i) {
            $(i.target).closest("#btnOpenFormCommonOrder, button.btnOpenForm").length || $(i.target).closest("#btnOpenFormServiceOrder").length || (0 === $(i.target).closest("div.modal__dialog").length && $("div.nmodal").removeClass("modal--open"));
        }),
        $("#nameFeedback, #phoneFeedback").keyup(function () {
            c("feedback");
        }),
        $("#nameOrder, #phoneOrder").keyup(function () {
            c("service");
        }),
        $("#phoneFeedback, #phoneOrder").keyup(function (i) {
            i.target.value = i.target.value.replace(/[^0-9]/g, "");
        }),
        $(window).scroll(function () {
            $("div.calculator").length && r();
        }),
        $("div.tabs-header__item").click(function () {
            var i = $(this).attr("data-tab");
            $(this).siblings("div.tabs-header__item").removeClass("tabs-header__item--active"),
                $(this).parent().siblings("div.tabs-content").find("div.tabs-content__item").removeClass("tabs-content__item--active"),
                $(this).addClass("tabs-header__item--active"),
                $("#" + i).addClass("tabs-content__item--active");
        }),
        $("div.service__devices div.tabs-header__item:first-child").click(),
        $("div.cashback-item input.switch__input").change(function () {
            n();
        }),
        $("div.service__devices input.switch__input").change(function () {
            $(this).hasClass("active") ? $(this).removeClass("active").prop("checked", !1) : ($(this).closest("div.tabs-content").find("input.switch__input").removeClass("active").prop("checked", !1), $(this).addClass("active").prop("checked", !0)), n(), p();
        }),
        $("div.tariff div.option-once input.switch__input").change(function () {
            p();
        }),
        $("div.tariff div.option input.switch__input").click(function () {
            var i,
                e,
                a = $(this).closest("div.tariff__options").find("div.option");
            (t = 0),
                (s = ""),
                $(this).closest("label.switch").hasClass("switch-ctv") &&
                    ($(this).prop("checked")
                        ? ($("div.wrapper-price div.option-price").removeClass("option-price--disabled"),
                          $("div.wrapper-price div.option-price-default").addClass("option-price--disabled"),
                          a.find("div.detail-default").hide(),
                          a.find("div.detail-sale").show(),
                          a.find("label.switch-utv input.switch__input").attr("data-price", parseInt(a.find("div.detail-sale").text())),
                          $("div.cashback-item").find("[data-option='За мобильную связь']").removeAttr("disabled"),
                          $("div.cashback-item").find("[data-option='За «автоплатеж»']").removeAttr("disabled"),
                          $("div.cashback-item").find("[data-option='За 1 год с Уфанет']").removeAttr("disabled"))
                        : ($("div.wrapper-price div.option-price").removeClass("option-price--disabled"),
                          $("div.wrapper-price div.option-price-sale").addClass("option-price--disabled"),
                          a.find("div.detail-sale").hide(),
                          a.find("div.detail-default").show(),
                          a.find("label.switch-utv input.switch__input").attr("data-price", parseInt(a.find("div.detail-default").text())),
                          $("div.cashback-item").find("[data-option='За мобильную связь']").attr("disabled", !0).prop("checked", !1),
                          $("div.cashback-item").find("[data-option='За «автоплатеж»']").attr("disabled", !0).prop("checked", !1),
                          $("div.cashback-item").find("[data-option='За 1 год с Уфанет']").attr("disabled", !0).prop("checked", !1))),
                $(this).closest("label.switch").hasClass("switch-utv") &&
                    ($(this).prop("checked")
                        ? ($("div.cashback-item").find("[data-option='За «автоплатеж»']").removeAttr("disabled"), $("div.cashback-item").find("[data-option='За 1 год с Уфанет']").removeAttr("disabled"))
                        : ($("div.cashback-item").find("[data-option='За «автоплатеж»']").attr("disabled", !0).prop("checked", !1), $("div.cashback-item").find("[data-option='За 1 год с Уфанет']").attr("disabled", !0).prop("checked", !1))),
                l(a),
                d(a),
                $(this)
                    .closest("div.tariff")
                    .find("div.tariff__price")
                    .text(t + " руб/мес"),
                $(this).closest("div.tariff").hasClass("tariff-selected") &&
                    ($("div.tariff-sum--monthly div.tariff-sum__result").text(t + " руб/мес"), $("div.tariff-desc__list-services").text(s), v(), (i = $(this).data("alias")), (e = $(this).prop("checked")), $("div.wrapper-price label.switch-" + i + " input.switch__input").prop("checked", e)),
                n();
        }),
        $("div.wrapper-price input.switch__input").click(function () {
            var i = $(this).data("alias");
            $("div.tariff-selected label.switch-" + i + " input.switch__input").click();
        }),
        new Swiper(".swiperCarouselTariff", { slidesPerView: "auto", spaceBetween: 56, noSwipingSelector: ".input-range", navigation: { nextEl: ".tariffs-swiper-button-next", prevEl: ".tariffs-swiper-button-prev" }, breakpoints: { 1280: { spaceBetween: 25 }, 768: { spaceBetween: 40 } } }),
        new Swiper("#swiperCarouselBenefits", { slidesPerView: "auto", spaceBetween: 86, navigation: { nextEl: ".benefits-swiper-button-next", prevEl: ".benefits-swiper-button-prev" }, breakpoints: { 768: { spaceBetween: 0 } } }),
        new Swiper("#swiperCarouselCashback", { slidesPerView: "auto", spaceBetween: 20, navigation: { nextEl: ".cashback-swiper-button-next", prevEl: ".cashback-swiper-button-prev" }, breakpoints: { 768: { spaceBetween: 40 } } }),
        new Swiper("#swiperCarouselUsageScenarios", { slidesPerView: "auto", spaceBetween: 56, navigation: { nextEl: ".usage-scenarios-swiper-button-next", prevEl: ".usage-scenarios-swiper-button-prev" }, breakpoints: { 768: { centeredSlides: !0, spaceBetween: 40 } } }),
        $("div.calculator").length && r(),
        $("#listDevices").empty(),
        $("div.tariff div.option-info").length &&
            $("div.tariff").each(function () {
                (t = 0),
                    $(this).find("label.switch-ctv input.switch__input").prop("checked")
                        ? ($("div.wrapper-price label.switch-ctv input.switch__input").prop("checked", !0),
                          $(this).find("div.detail-default").hide(),
                          $(this).find("div.detail-sale").show(),
                          $(this)
                              .find("label.switch-utv input.switch__input")
                              .attr("data-price", parseInt($(this).find("div.detail-sale").text())))
                        : ($("div.wrapper-price label.switch-ctv input.switch__input").prop("checked", !1),
                          $(this).find("div.detail-sale").hide(),
                          $(this).find("div.detail-default").show(),
                          $(this)
                              .find("label.switch-utv input.switch__input")
                              .attr("data-price", parseInt($(this).find("div.detail-default").text()))),
                    l($(this).find("div.option")),
                    $(this)
                        .find("div.tariff__price")
                        .text(t + " руб/мес");
            }),
        $("div.tariff-sum--once").addClass("tariff-sum--invisible"),
        $("div.tariff div.recomended").prev().click(),
        $("div.cashback-item").each(function () {
            $(this)
                .find("input.switch__input")
                .attr("data-price", parseInt($(this).find("input.switch__input").data("price"))),
                "За 2 услуги" === $(this).find("input.switch__input").attr("data-option") && $(this).find("input.switch__input").attr("disabled", "disabled"),
                "За мобильную связь" === $(this).find("input.switch__input").attr("data-option") && $(this).find("input.switch__input").attr("disabled", "true"),
                "За «автоплатеж»" === $(this).find("input.switch__input").attr("data-option") && $(this).find("input.switch__input").attr("disabled", "true"),
                "За 1 год с Уфанет" === $(this).find("input.switch__input").attr("data-option") && $(this).find("input.switch__input").attr("disabled", "true");
        }),
        ($("div.tariff-selected").find("label.switch-ctv input.switch__input").prop("checked") || $("div.tariff-selected").find("label.switch-utv input.switch__input").prop("checked")) && $("div.cashback-item").find("[data-option='За 2 услуги']").prop("checked", !0),
        $("div.option label.switch, div.option-price label.switch, div.option-once label.switch").each(function () {
            $(this).find("span.switch__round").length || $(this).append("<span class='switch__round'></span>");
        });
});
