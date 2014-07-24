
(function($){
	'use strict';

	$('.rowselect').on( 'click', function(e){
		e.preventDefault();

		// Adding for single items
		if( $(this).data('rowselect') === 'single' && $(this).hasClass('active') === false ){
			$('.rowselect').removeClass('active').find('checkbox').prop('checked', false);
		}

		// Related items
		if( $(this).data('rowrelated') !== undefined ){
			var id = $(this).data('rowrelated');
			selected( $('.rowselect[data-rowrelated="'+id+'"]') );
		} else {
			selected( $(this) );
		}

		function selected( item ){
			if( item.hasClass('active') ){
				// Remove Class
				item.removeClass('active');
				// Trigger
				item.trigger('row-deselected');
			} else {
				// Add Class
				item.addClass('active');
				// Trigger
				item.trigger('row-selected');
			}

			// Toggle Checked input
			item.find('input[type="checkbox"]').each( function(){
				if( $(this).prop('checked') === true ){
					$(this).prop('checked', false);
				} else {
					$(this).prop('checked', true);
				}
			});

		}
	});

 }(jQuery));