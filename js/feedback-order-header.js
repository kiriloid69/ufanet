$((function(){var a=$("#feedback-order-header"),e=a.find('input[type="checkbox"]');a.bind("show.bs.modal",(function(){for(var a=$("#main input[data-alias]:checked"),t=0;t<e.length;t++)for(var d=0;d<a.length;d++)$(e[t]).attr("id")===$(a[d]).attr("data-alias")&&$(e[t]).prop("checked",!0)}))}));