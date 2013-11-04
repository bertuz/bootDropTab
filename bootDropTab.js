(function ( $ ) {
	$.fn.dropTab= function(clickHandlerToRemove) {
		var $aTab= $("a.contentTab", this);
		var $dropDown= $("span.crtOpenDrop", $aTab);

		this.data("bootDropTabHref", $("a.subtab:first", this).attr("href"));

		$dropDown.click(function(e) {
			var $anchor= $(this).closest("a");
			var href= $anchor.attr("href");

			e.preventDefault();
			
		  	$anchor
		  		.addClass("dropdown-toggle")
		  	  	.attr("data-toggle", "dropdown");
		});

		if(clickHandlerToRemove)
			$aTab.off("click", clickHandlerToRemove);

		$aTab.click(function(e) {
			e.preventDefault();

			if(! $(e.target).is("span.crtOpenDrop")) {
				$(this).removeClass("dropdown-toggle")
					.attr("data-toggle", "")
					.attr("href", $(this).closest("li.bootDropTab").data("bootDropTabHref"))
					.tab("show");

				$(this).attr("href", "#");				
			}
		});

		$("a.subtab", this).click(function (e) {
			e.preventDefault();

			$("a span.tabsel", $(this).parents("li.bootDropTab")).html($(this).html().toLowerCase());
			$(this).parents("li.bootDropTab").data("bootDropTabHref", $(this).attr("href"));
			
			$(this).tab("show");		
		});


		return this;
	};
}( jQuery ));
