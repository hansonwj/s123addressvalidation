function getESRIAddressId(address, token, debugmode=true) {

	var addressEncoded = encodeURI(address);
	
	var url = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine='+addressEncoded+'&outFields=Addr_type,Score,Match_addr,X,Y&f=json';
	
    if (token){
        url = url + "&token=" + token;
    }
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",url,false);
    xmlhttp.send();

    if (xmlhttp.status!==200){
        return (debugmode? xmlhttp.status:"");
    } else {
        var responseJSON=JSON.parse(xmlhttp.responseText)
        if (responseJSON.error){
            return (debugmode? JSON.stringify(responseJSON.error):"");
        } else {
            if (responseJSON){
                return JSON.stringify(responseJSON.candidates[0]);
            }
            else{
                return (debugmode? "No Features Found":"");
            }
        }
    }
}

function splitAddressJSON(addressJSON, field){
    if (field==="Score"){
	    return JSON.parse(addressJSON).attributes.Score
		
	}
	else if (field==="Addr_type"){
	    return JSON.parse(addressJSON).attributes.Addr_type
	}
	else if (field==="Match_addr"){
	    return JSON.parse(addressJSON).attributes.Match_addr
	}
	else if (field==="X"){
	    return JSON.parse(addressJSON).attributes.X
	}
	else if (field==="Y"){
	    return JSON.parse(addressJSON).attributes.Y
	}

}