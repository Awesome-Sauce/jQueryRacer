$(function () {
    // Click Race! button to start the race button
    $('#go').click(function() {
        //
        function checkiIfComplete() {
            if (isComplete == false) {
                isComplete = true;
            } else {
                place = 'second';
            }
        }

        // Get car width
        var carWidth = $('#car1').width();

        // Get width of racetrack
        var raceTrackWidth = $(window).width() - carWidth;

        // Generate random #s between 1 and 5000 for each car
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1);

        // Set isComplate to false
        var isComplete = false;

        // Set place to first by default
        var place = 'first';

        // Animate car1
        $('#car1').animate({
            // Move car the width of the racetrack of duration raceTime1
            left: raceTrackWidth
        }, raceTime1, function() {      // Animation is now complete
            checkiIfComplete();

            // Give race results
            $('#raceInfo1 span').text( 'Finished in ' + place + 
                    ' place clocked in at' + raceTime1 + ' milliseconds!' );
        });

        // Animate car2
        $('#car2').animate({
            // Move car the width of the racetrack of duration raceTime1
            left: raceTrackWidth
        }, raceTime2, function() {      // Animation is now complete
            checkiIfComplete();

            // Give race results
            $('#raceInfo2 span').text( 'Finished in ' + place + 
                    ' place clocked in at' + raceTime2 + ' milliseconds!' );
        });
    })
    // click the Reset button to reset the race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    })
});