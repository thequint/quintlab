var content_array = [
  {
    set: [
      { category: "women" },
      {
        rows: [
          { row: ["Sarkar", "Congress", "Aam Aadmi Party", "RBI"] },
          { row: ["Mahatma Gandhi","Hitler","May the force be with you","mere mitron"] },
          { row: ["ki vichar dhaara", "ke kadmo"] },
          { row: ["par chal rahi", "pe aage badh rahi", "ko badnaam kar rahi"] },
          { row: ["hai", "thi"] }
        ]
      }
    ]
  },
  {
    set: [
      { category: "men" },
      {
        rows: [
          { row: ["MNREGA", "demonetisation", "Jan Dhan Yojana", "Lok Pal"] },
          { row: ["aap ki", "humari", "Congress ki", "Sarkar ki"] },
          { row: ["vifalta ka", "safalta ka", "dur dasha ka"] },
          { row: ["saboot hai", "smarak hai"] }
        ]
      }
    ]
  },
 {
    set: [
      { category: "all" },
      {
        rows: [
          { row: ["MNREGA", "demonetisation", "Jan Dhan Yojana", "Lok Pal"] },
          { row: ["aap ki", "humari", "Congress ki", "Sarkar ki"] },
          { row: ["vifalta ka", "safalta ka", "dur dasha ka"] },
          { row: ["saboot hai", "smarak hai"] }
        ]
      }
    ]
  },	
		
	
];
var data_filter;
function random(filter) {
  $(".str").html("");
  var choose_setup = Math.floor(Math.random() * content_array.length);
  if (filter != null) {
    //console.log(content_array[choose_setup].set[0].category +"|"+ filter);
    if(content_array[choose_setup].set[0].category!=filter)
      {
        random(filter);
        return;
      }
    else
      {
      // do nothing  
      }
    //$(".str").html(filter+"|"+content_array[choose_setup].set['category']);
    
  }

  //$(".str").html( content_array.length+"|"+choose_setup+"|"+content_array[0].set[0].row[0]);

  for (var i = 0; i < content_array[choose_setup].set[1].rows.length; i++) {
    console.log(content_array[choose_setup].set[1].rows[i]);
    
    var choose_word = Math.floor(
      Math.random() *content_array[choose_setup].set[1].rows[i].row.length
    );
	  if(i==0)
		  {
    $(".str").append(
      content_array[choose_setup].set[1].rows[i].row[choose_word]
    );
		  }
	  else
		  {
			  $(".str").append(
      "&nbsp;" + content_array[choose_setup].set[1].rows[i].row[choose_word]
    ); 
		  }
  }
}


$(".btn-generator").click(function() {
	if(data_filter=="null")
		{
  random();
		}
	else
		{
	  random(data_filter);		
		}
});
$(".btn-filter").click(function() {
 data_filter=$(this).attr("data-filter");
});




// Copy text

document.getElementById("btnCopy").addEventListener("click", function() {
    copyToClipboardMsg(document.getElementById("copyShare"), "msg");
});

function copyToClipboardMsg(elem, msgElem) {
    var succeed = copyToClipboard(elem);
    var msg;
    if (!succeed) {
        msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
    } else {
        //msg = "Text copied to the clipboard."
        msg = "copied"
    }
    if (typeof msgElem === "string") {
        msgElem = document.getElementById(msgElem);
    }
    msgElem.innerHTML = msg;
    setTimeout(function() {
        //msgElem.innerHTML = "Copy";
        msgElem.innerHTML = "";
    }, 2000);
}

function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}


// Toltip

$('.btn-circle').darkTooltip({
    animation:'fadeIn'
});


$('.filter-men').click(function(){
	$('.filter-women').parent().removeClass('is-active');
	$(this).parent().addClass('is-active');
});

$('.filter-women').click(function(){
	$('.filter-men').parent().removeClass('is-active');
	$(this).parent().addClass('is-active');
});

$('.filter-all').click(function(){
	$('.filter-men').parent().removeClass('is-active');
	$('.filter-women').parent().removeClass('is-active');
});
