    // Country information
    $.ajax({
        url: "../libs/php/geoJSON.php",
        type: 'POST',
        dataType: 'json',
        data: {
            capital: highlightFeature(),
            languages: highlightFeature(),
            population: highlightFeature(),
            areaInSqKm: highlightFeature(),
            currencyCode: highlightFeature()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                // return continent
                $('#txtContinent').html(result['data'][0]['continentName']);

                // return country name
                $('#txtCountry').html(result['data'][0]['countryName']);

                // return capital city
                $('#txtCapital').html(result['data'][0]['capital']);

                // return languages spoken in given country
                $('#txtLanguages').html(result['data'][0]['languages']);

                // return country population
                $('#txtPopulation').html(result['data'][0]['population']);

                // return area in sqkm
                $('#txtArea').html(result['data'][0]['areaInSqKm']);

                // return country currency code
                $('#currencyCode').html(result['data'][0]['currencyCode']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {   
            console.log('Error! Unable to retrieve data from geonames.php');
        }
    }); 

    // Exhange rates
    $.ajax({
        url: "libs/php/exchange.php",
        type: 'POST',
        dataType: 'json',
        data: {
            base: $('#selCountry').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                // return exhange rates
                $('#txtRates').html(result['data']['rates']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {   
            console.log('Error! Unable to retrieve data from exchange.php');
        }
    }); 

    // Weather observations
    $.ajax({
        url: "libs/php/weather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#selLat').val(),
            lng: $('#selLng').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                // return weather observation
                $('#txtObservation').html(result['data']['observation']);

                // return clouds data
                $('#txtclouds').html(result['data']['clouds']);

                // return date-time
                $('#txtTime').html(result['data']['datetime']);

                // return temperature in degrees
                $('#txtTemp').html(result['data']['temperature']);

                // return humidity
                $('#txtHumid').html(result['data']['humidity']);

                // return wind direction
                $('#txtWindDir').html(result['data']['windDirection']);

                // return wind speed
                $('#txtWindSPeed').html(result['data']['windSpeed']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {   
            console.log('Error! Unable to retrieve data from weather.php');
        }
    }); 

    // Wikipedia links
    $.ajax({
        url: "libs/php/wikiLinks.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#selLat').val(),
            lng: $('#selLng').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                // return exhange rates
                $('#txtWikiLinks').html(result['data'][0]['wikipediaUrl']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {   
            console.log('Error! Unable to retrieve data from wikiLinks.php');
        }
    }); 
