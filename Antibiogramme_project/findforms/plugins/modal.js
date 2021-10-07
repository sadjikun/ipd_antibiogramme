    // showing different elements for Virus influenza
    $("#virus_influenza").on('change',function(){    
    	if ($(this).val() == "oui") {
			var x = document.getElementsByClassName("info_virus_influenza");
			x[0].style.display = "table";			
    	}else{
			var x = document.getElementsByClassName("info_virus_influenza");
			x[0].style.display = "none";
            var y = document.getElementsByClassName("info_influenza_A");
			y[0].style.display = "none";
            var z = document.getElementsByClassName("info_influenza_B");
			z[0].style.display = "none";
            var t = document.getElementsByClassName("info_autres_virus_respiratoires");
			t[0].style.display = "none";
		}
    });


    // showing different elements for Antibiogramme
    $("#antibiogramme_fait").on('change',function(){    
    	if ($(this).val() == "oui") {
			var x = document.getElementsByClassName("ipg");
			x[0].style.display = "table";			
    	}else{
			var x = document.getElementsByClassName("ipg");
			x[0].style.display = "none";
		}
    });


    // showing different elements for Virus influenza "A"
    $("#influenza_A").on('change',function(){    
    	if ($(this).val() == "oui") {
			var x = document.getElementsByClassName("info_influenza_A");
			x[0].style.display = "table";			
    	}else{
			var x = document.getElementsByClassName("info_influenza_A");
			x[0].style.display = "none";
		}
    });
    // showing different elements for Virus influenza "B"
    $("#influenza_B").on('change',function(){    
    	if ($(this).val() == "oui") {
			var x = document.getElementsByClassName("info_influenza_B");
			x[0].style.display = "table";			
    	}else{
			var x = document.getElementsByClassName("info_influenza_B");
			x[0].style.display = "none";
		}
    });
    // showing different elements for Autres virus respiratoires:
    $("#autres_virus_respiratoires").on('change',function(){    
    	if ($(this).val() == "oui") {
			var x = document.getElementsByClassName("info_autres_virus_respiratoires");
			x[0].style.display = "table";			
    	}else{
			var x = document.getElementsByClassName("info_autres_virus_respiratoires");
			x[0].style.display = "none";
		}
    });
    
