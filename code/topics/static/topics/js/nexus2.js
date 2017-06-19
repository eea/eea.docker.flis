$(document).ready(function () {

	$('.nexus__graph').nexusGraphInit();

});

(function( $ ) {

    $.fn.nexusGraphInit = function() {

    		var centerText = function(name) {
					//var b = p.getBBox();
					//t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
					//t.textContent = "a";
					//t.setAttribute("fill", "red");
					//t.setAttribute("font-size", "14");
					var container = name.parents('g'),
							box = container.find('.nexus__shapeborder')[0].getBBox(),
							svg = d3.select(container[0]);

					name.hide();

					var name_parts = name.text().split(' ');
					for (var i = 0; i < name_parts.length; i++) {
						var name_part = name_parts[i];
						var text = svg.append("text")
							.attr("transform", 'matrix(1 0 0 1 ' + (box.x + (box.width) / 2) + ' ' + (box.y + box.height/2 + 5) + ')')
							.attr("class", "nexus__chart_name")
							.attr("text-anchor", "middle")
							.text(name_part);

						switch (name_parts.length) {
							case 2:
								if (i === 0) {
									text.attr("dy", "-0.75em")
								}
								else if (i === 1) {
									text.attr("dy", "0.75em")
								}
								break;
							case 3:
								if (i === 0) {
									text.attr("dy", "-1.5em")
								}
								else if (i === 1) {
									text.attr("dy", "0")
								}
								else if (i === 2) {
									text.attr("dy", "1.5em")
								}
								break;
							case 4:
								if (i === 0) {
									text.attr("dy", "-2.25em")
								}
								else if (i === 1) {
									text.attr("dy", "-0.7em")
								}
								else if (i === 2) {
									text.attr("dy", "0.7em")
								}
								else if (i === 3) {
									text.attr("dy", "2.25em")
								}
								break;
						}

						//var text = '<text transform="matrix(1 0 0 1 ' + (box.x + (box.width - name.width()) / 2) + ' ' + (box.y + box.height/2 + 5) + ')" class="nexus__chart_name">' + name_part + '</text>';
						//container.append(text);
					}


					console.log("translate(" + (box.x + box.width/2) + " " + (box.y + box.height/2) + ")");
				};

				return this.each(function () {
						var graph = $(this),
						clickable = graph.find('.nexus__clickable'),
						stories = graph.find('.nexus__stories'),
						strory_items = stories.find('> li'),
						chart_names = graph.find('.nexus__chart_name');

						chart_names.each(function() {
							centerText($(this))
						});

						clickable.on('click', function () {
							var self = $(this),
									fadeSpeed = graph.hasClass('nexus--initial') ? 1000 : 500;

							clickable.removeClass('nexus--is-active');
							self.addClass('nexus--is-active');

							setTimeout(function() {
									graph.removeClass('nexus--initial');
								}, 0);

							if ($(window).width() > 991) {
								graph.find('.nexus__chart_wrapper').stop().animate({
									'margin-left': 0
								}, "slow");
							}

							strory_items.hide();
							stories.find(self.data('target')).fadeIn(fadeSpeed);
						});

					});
    };

}( jQuery ));