$((function(){var a;a="case-1",$("div[data-name]").val((function(){$(this).data("name")===a?$(this).show():$(this).hide()})),$(".tariff__select").change((function(){$(this).closest(".wrapper").find("[data-name]").hide().filter(`[data-name="${this.value}"]`).show()})).trigger("change")}));