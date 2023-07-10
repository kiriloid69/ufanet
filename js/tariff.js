$(function () {
    new RangeTouch(".input-range", { thumbWidth: 35 });
    var i;
    $(".input-range").val(function () {
        "2" === $(this).attr("max") && $(this).siblings(".slider").css("left", "75%");
    }),
        $(".input-range").on("input", function (i) {
            i.stopPropagation(),
                "2" === $(this).attr("max") &&
                    $(this)
                        .closest(".tariff__input-range")
                        .find(".slider")
                        .css("left", "1" === this.value ? 25 * this.value + "%" : 25 * this.value + 25 + "%"),
                "3" === $(this).attr("max") &&
                    $(this)
                        .closest(".tariff__input-range")
                        .find(".slider")
                        .css("left", 25 * this.value + "%"),
                $(this).closest(".tariff__input-range").siblings().find("[data-tariff]").hide().filter(`[data-tariff='tariff-${this.value}']`).show();
            var t = $(this).closest(".tariff__input-range").siblings(".tariff__name").find("div.text:visible").text();
            $(".tariff-desc__name").text(t);
            var s = [];
            $(this)
                .closest(".tariff__input-range")
                .siblings(".tariff__options")
                .find("div.option:visible")
                .clone()
                .each(function (i, t) {
                    s.push($(t).find("img").remove().context.innerText);
                }),
                $("div.tariff-desc__list-services").text(s.join(" + "));
        }),
        (i = "tariff-2"),
        $("div[data-tariff]").val(function () {
            if (!($(this).closest(".tariff__name").siblings(".tariff__input-range").length > 0 || $(this).closest(".tariff__options").siblings(".tariff__input-range").length > 0)) return !0;
            $(this).data("tariff") === i ? $(this).show() : $(this).hide();
        });
});
