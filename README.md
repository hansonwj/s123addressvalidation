# Survey123 on-the-fly address validation
This repository contains the information required to set up survey123 to do address 'validation' on the fly. It provides feedback to the user telling them the quality of the best match ("match score") as well as storing the lat/long and single-line address for the matched address.

Create a new Survey form in Survey123 connect. Choose import from file and select the xlsx file. Add the .js file to the survey's scripts folder.

Note that this will use credits based on the current ESRI standard. At time of writing it is 40 credits per 1000 geocodes. Note the geocoding will start when you have values in the "street number", "street name" and type more than 3 characters in the "suburb field". Every keypress in those fields will send another geocoding request to the server and will count as one geocode.

You can swap out the locator for your own to minimise costs by editing the locator URL within the javascript file. Note you may also have to change the attribute fields if your locator returns different attributes to the esri world geocoder.
