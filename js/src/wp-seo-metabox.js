/* Browser:true */
/* global wpseoSelect2Locale */

( function( $ ) {
	function wpseoInitTabs() {
		if ( jQuery( ".wpseo-metabox-tabs-div" ).length > 0 ) {
			jQuery( ".wpseo-metabox-tabs" )
				.on( "click", "a.wpseo_tablink", function( ev ) {
					ev.preventDefault();

					jQuery( ".wpseo-meta-section.active .wpseo-metabox-tabs li" ).removeClass( "active" );
					jQuery( ".wpseo-meta-section.active .wpseotab" ).removeClass( "active" );

					// Hide the Yoast tooltip when the element gets clicked.
					jQuery( this ).addClass( "yoast-tooltip-hidden" );

					var targetElem = jQuery( jQuery( this ).attr( "href" ) );
					targetElem.addClass( "active" );
					jQuery( this ).parent( "li" ).addClass( "active" );

					if ( jQuery( this ).hasClass( "scroll" ) ) {
						jQuery( "html, body" ).animate( {
							scrollTop: jQuery( targetElem ).offset().top,
						}, 500 );
					}
				} )
				.on( "mouseleave", "a.wpseo_tablink", function() {
					// The element can still have focus, ensure to hide the tooltip.
					jQuery( this ).addClass( "yoast-tooltip-hidden" );
				} )
				.on( "blur mouseenter", "a.wpseo_tablink", function() {
					// Make the element tooltip-able again.
					jQuery( this ).removeClass( "yoast-tooltip-hidden" );
				} );
		}

		if ( jQuery( ".wpseo-meta-section" ).length > 0 ) {
			jQuery( "#wpseo-meta-section-content, .wpseo-meta-section-react" ).addClass( "active" );

			jQuery( ".wpseo-metabox-sidebar li" ).filter( function() {
				return jQuery( this ).find( ".wpseo-meta-section-link" ).attr( "href" ) === "#wpseo-meta-section-content";
			} ).addClass( "active" );

			jQuery( "a.wpseo-meta-section-link" )
				.on( "click", function( ev ) {
					var targetTab = jQuery( this ).attr( "href" ),
						targetTabElement = jQuery( targetTab ),
						helpCenterToggleButton = jQuery( ".yoast-help-center__button" );

					ev.preventDefault();

					jQuery( ".wpseo-metabox-sidebar li" ).removeClass( "active" );
					jQuery( ".wpseo-meta-section" ).removeClass( "active" );
					jQuery( ".wpseo-meta-section-react.active" ).removeClass( "active" );

					// Hide the Yoast tooltip when the element gets clicked.
					jQuery( this ).addClass( "yoast-tooltip-hidden" );
					if ( targetTab === "#wpseo-meta-section-content" ) {
						jQuery( ".wpseo-meta-section-react" ).addClass( "active" );
					}

					targetTabElement.addClass( "active" );

					// Close the Help Center when clicking on the Go Premium link.
					if ( targetTab === "#wpseo-meta-section-premium" ) {
						if ( helpCenterToggleButton.attr( "aria-expanded" ) === "true" ) {
							helpCenterToggleButton.click();
						}
					}

					jQuery( this ).parent( "li" ).addClass( "active" );
				} )
				.on( "mouseleave", function() {
					// The element can still have focus, ensure to hide the tooltip.
					jQuery( this ).addClass( "yoast-tooltip-hidden" );
				} )
				.on( "blur mouseenter", function() {
					// Make the element tooltip-able again.
					jQuery( this ).removeClass( "yoast-tooltip-hidden" );
				} );
		}

		jQuery( ".wpseo-metabox-tabs" ).show();
		// End Tabs code.
	}

	window.wpseoInitTabs = wpseoInitTabs;
	/* eslint-disable-next-line camelcase */
	window.wpseo_init_tabs = wpseoInitTabs;

	/**
	 * @summary Adds select2 for selected fields.
	 *
	 * @returns {void}
	 */
	function initSelect2() {
		// Select2 for Yoast SEO Metabox Advanced tab
		$( "#yoast_wpseo_meta-robots-noindex" ).select2( { width: "100%", language: wpseoSelect2Locale } );
		$( "#yoast_wpseo_meta-robots-adv" ).select2( { width: "100%", language: wpseoSelect2Locale } );
	}

	jQuery( document ).ready( function() {
		jQuery( ".wpseo-meta-section" ).each( function( _, el ) {
			jQuery( el ).find( ".wpseo-metabox-tabs li:first" ).addClass( "active" );
			jQuery( el ).find( ".wpseotab:first" ).addClass( "active" );
		} );
		window.wpseo_init_tabs();

		initSelect2();
	} );
}( jQuery ) );

/* eslint-disable */
/* jshint ignore:start */
/**
 * Cleans up a string, removing script tags etc.
 *
 * @deprecated since version 3.0
 *
 * @param {string} str
 *
 * @returns {string}
 */
function ystClean( str ) {
	console.error( "ystClean is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return str;
}

/**
 * Tests whether given element `str` matches `p`.
 *
 * @deprecated since version 3.0
 *
 * @param {string} str The string to match
 * @param {RegExp} p The regex to match
 * @returns {string}
 */
function ystFocusKwTest( str, p ) {
	console.error( "ystFocusKwTest is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return "";
}

/**
 * The function name says it all, removes lower case diacritics
 *
 * @deprecated since version 3.0
 *
 * @param {string} str
 * @returns {string}
 */
function ystRemoveLowerCaseDiacritics( str ) {
	console.error( "ystRemoveLowerCaseDiacritics is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return str;
}

/**
 * Tests whether the focus keyword is used in title, body and description
 *
 * @deprecated since version 3.0
 */
function ystTestFocusKw() {
	console.error( "ystTestFocusKw is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * This callback is used for variable replacement
 *
 * This is done through a callback as it _could_ be that `ystReplaceVariables` has to do an AJAX request.
 *
 * @callback replaceVariablesCallback
 * @param {string} str The string with the replaced variables in it
 */

/**
 * Replaces variables either with values from wpseoMetaboxL10n, by grabbing them from the page or (ultimately) getting them through AJAX
 *
 * @deprecated since version 3.0
 *
 * @param {string} str The string with variables to be replaced
 * @param {replaceVariablesCallback} callback Callback function for when the
 */
function ystReplaceVariables( str, callback ) {
	console.error( "ystReplaceVariables is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	callback( str );
}

/**
 * Replace a variable with a string, through an AJAX call to WP
 *
 * @deprecated since version 3.0
 *
 * @param {string} replaceableVar
 * @param {replaceVariablesCallback} callback
 */
function ystAjaxReplaceVariables( replaceableVar, callback ) {
	console.error( "ystAjaxReplaceVariables is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * Updates the title in the snippet preview
 *
 * @deprecated since version 3.0
 *
 * @param {boolean} [force = false]
 */
function ystUpdateTitle( force ) {
	console.error( "ystUpdateTitle is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * Cleans the title before use
 *
 * @deprecated since version 3.0
 *
 * @param {string} title
 * @returns {string}
 */
function ystSanitizeTitle( title ) {
	console.error( "ystSanitizeTitle is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return title;
}

/**
 * Updates the meta description in the snippet preview
 *
 * @deprecated since version 3.0
 */
function ystUpdateDesc() {
	console.error( "ystUpdateDesc is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * Sanitized the description
 *
 * @deprecated since version 3.0
 *
 * @param {string} desc
 * @returns {string}
 */
function ystSanitizeDesc( desc ) {
	console.error( "ystSanitizeDesc is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return desc;
}

/**
 * Trims the description to the desired length
 *
 * @deprecated since version 3.0
 *
 * @param {string} desc
 * @returns {string}
 */
function ystTrimDesc( desc ) {
	console.error( "ystTrimDesc is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return desc;
}

/**
 * Updates the URL in the snippet preview
 *
 * @deprecated since version 3.0
 */
function ystUpdateURL() {
	console.error( "ystUpdateURL is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * Bolds the keywords in a string
 *
 * @deprecated since version 3.0
 *
 * @param {string} str
 * @param {boolean} url
 * @returns {string}
 */
function ystBoldKeywords( str, url ) {
	console.error( "ystBoldKeywords is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return str;
}

/**
 * Updates the entire snippet preview
 *
 * @deprecated since version 3.0
 */
function ystUpdateSnippet() {
	console.error( "ystUpdateSnippet is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );
}

/**
 * Escapres the focus keyword
 *
 * @deprecated since version 3.0
 *
 * @param {string} str
 * @returns {string}
 */
function ystEscapeFocusKw( str ) {
	console.error( "ystEscapeFocusKw is deprecated since Yoast SEO 3.0, use YoastSEO.js functionality instead." );

	return str;
}

window.ystClean = ystClean;
window.ystFocusKwTest = ystFocusKwTest;
window.ystRemoveLowerCaseDiacritics = ystRemoveLowerCaseDiacritics;
window.ystTestFocusKw = ystTestFocusKw;
window.ystReplaceVariables = ystReplaceVariables;
window.ystAjaxReplaceVariables = ystAjaxReplaceVariables;
window.ystUpdateTitle = ystUpdateTitle;
window.ystSanitizeTitle = ystSanitizeTitle;
window.ystUpdateDesc = ystUpdateDesc;
window.ystSanitizeDesc = ystSanitizeDesc;
window.ystTrimDesc = ystTrimDesc;
window.ystUpdateURL = ystUpdateURL;
window.ystBoldKeywords = ystBoldKeywords;
window.ystUpdateSnippet = ystUpdateSnippet;
window.ystEscapeFocusKw = ystEscapeFocusKw;
/* jshint ignore:end */
/* eslint-enable */
