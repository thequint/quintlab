$(document).ready(function() {
  $.ajax({
    type: "GET",
    url:
    "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page=2018_Commonwealth_Games_medal_table&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
      var text = data.parse.text["*"]; //console.log(
      //data.parse.text['*']);
      $(".xyz").html(text);
      var table_str = $(".wikitable").html();
      $(".table").html("<table>"+table_str+"</table>");
      $(".xyz").remove();
      $("a").each(function() {
        if ($(this).html() === "India") {
          var x = $(this)
          .closest("tr")
          .find("td")
          .html();
          // console.log(x);
          if (x > 5) {
            $("tr").each(function(index) {
              if (index > 5 && index!=x)                {
                //console.log($(this).index())
                $(this).remove();
              }
            });
            // add new india row
          } else {
            $("tr").each(function(index) {
              if ($(this).index() > 5) {
                $(this).remove();
              }
            });
          }
        }
      });
		$("tr").each(function(index){
			
			console.log($(this).find("td").length);
			if($(this).find("td").length==5)
				{
					$(this).addClass("anomaly");
					$(this).prepend("<td>");
					
				}
			if(index==1)
				{
				$(this).addClass("light");	
				}
			else if(index>1)
				{
					if($(this).hasClass("anomaly"))
						{
							if($("tr").eq(index-1).hasClass("dark"))
								{
									$(this).addClass("dark");
								}
							else
								{
								$(this).addClass("light");	
								}
							
						}
					else
						{
							if($("tr").eq(index-1).hasClass("light"))
								{
									$(this).addClass("dark");
								}
							else
								{
								$(this).addClass("light");	
								}
						}
				}

		})
		
	  $('table tr th:nth-child(2)').html('Country');	
	  $("span, caption").remove();
      $("img").remove();
      $("a").removeAttr("href");
	  $('*').removeAttr("style");
		$('*').removeAttr("bgcolor");
    },
    error: function(errorMessage) {}
  });
});
