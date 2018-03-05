$(function() {
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');
	
	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		for(var i=0; i<10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	};

	$('#search').click(searchCountries);

	function searchCountries() {
		var countrySearchName = $('#country-name').val();

	if(!countrySearchName.length) countrySearchName = 'Poland';
		$.ajax({
			url: url + countrySearchName,
			method: 'GET',
			success: showCountriesList
		});
	};

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			//Country Details
			var name = item.name;
			var flag = item.flag
			var capital = item.capital;
			var languages = item.languages[{name}];
			var currency = item.currencies[{name}];
//			console.log(name)
//			console.log(capital)

			//Global Table elements
			var $countryContainer = $('<li>').addClass('container');
			var $countryRow1 = $('<div>').addClass('row r1');
			var $countryRow2 = $('<div>').addClass('row r2');
			var $countryRow3 = $('<div>').addClass('row r3');
			var $countryRow4 = $('<div>').addClass('row r4');
			var $countryRow5 = $('<div>').addClass('row r5');
			var $countryBasicInfo = $('<div>').addClass('info col-sm-12').text('Country Basic Information:');
			var $countryCapitalType = $('<div>').addClass('detailType col-sm-3').text('Capital:');
			var $countryLanguageType = $('<div>').addClass('detailType col-sm-3').text('Language(s):');
			var $countryCurrencyType = $('<div>').addClass('detailType col-sm-3').text('Currency:');
			//Country Specific elements
			var countryCode = item.alpha3Code.toLowerCase();
			var $countryName = $('<h1 class="col-sm-9">').text(name);
			var $countryFlag = $('<img class="col-sm-3" src="' + flag + '">');
			var $countryCapital = $('<div>').addClass('detailData col-sm-9').text(capital);
			var $countryLanguage = $('<div>').addClass('detailData col-sm-9').text(languages);
			var $countryCurrency = $('<div>').addClass('detailData col-sm-9').text(currency);

			$countryContainer.id = name;
			
			countriesList
				.append($countryContainer
					.append($countryRow1
						.append($countryFlag)
						.append($countryName)
					)
					.append($countryRow2
						.append($countryBasicInfo)
					)
					.append($countryRow3
						.append($countryCapitalType)
						.append($countryCapital)
					)
					.append($countryRow4
						.append($countryLanguageType)
						.append($countryLanguage)
					)
					.append($countryRow5
						.append($countryCurrencyType)
						.append($countryCurrency)
					)
				);				

//			$('<li>').id = item.name
//			$('#' + item.name).addClass('container')
//			$('img').addClass('flag')
//			$('<div>').addClass('flag')
		});
	};
})

//$("#tableID").find('tbody')
//    .append($('<tr>')
//        .append($('<td>')
//            .append($('<img>')
//                .attr('src', 'img.png')
//                .text('Image cell')
//            )
//        )
//    );
//
//				.append($countryRow
//					.append()
//					.append()
//				)    