$(document).ready(function () {
    $(".rcontent").hide();
    $(".show_hide").on("click", function () {
        let txt=$(this).text();
        if(txt=='Read More'){
            $(this).text('Read Less');
            $(this).parent(".about-content").find(".rcontent").show();
        }
        else if(txt=='Read Less'){
            $(this).text('Read More');
            $(this).parent(".about-content").find(".rcontent").hide();
        }
    });
    
    $('.courseDetail').on('click',function(){
        $('#course_wrap_image').attr('src',$(this).data('image'));
        $('#courseName').text($(this).data('name'));
        $('#coursePrice').text($(this).data('price'));
        $('#courseDuration').text($(this).data('duration'));
        $('#courseContent').text($(this).data('content'));
        $('#courseDate').text($(this).data('date'));
        $('#detailModal').modal('show');
    });
    $('.enquirymodal').on('click',function(){
        let course_name=$(this).data('coursename');
        let name=$(this).data('name');
        $('option[value="' + course_name + '"]').attr('selected', 'selected');
        $('option[value="' + name + '"]').attr('selected', 'selected')
        $('#exampleModal').modal('show');
    });
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-navb a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-navb a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

    var coursesByName = {
      "Bakery": ["Basics to Advance on Cakes and Decoration with Whipping Cream & Ganache", "Masters in Bread and Buns", "Fundamentals of making Chocolate", "Cover with Fondant", "Healthy and Tasty Tea-Time Cakes",
        "Exotic Cheese Cakes", "Baking Cookies and Biscuits", "Cupcakes and Muffins", "Appetising Brownies and Blondie’s Course", "Jar Cakes workshop"
      ],
      "Culinary": ["Non-veg Mughlai", "Breakfast Premix", "Cooking Sizzlers", "Restaurant Style Gravy Premix",
        "The Traditional Chinese", "Frozen Food and Snacks", "Create and Shape Modaks","Fundamentals of Garam Masala","Natural Ice-cream and Sherbet workshop","Making Popsicle"
      ],

    }

    function makeSubmenu(value) {
        if(value=='Order'){
            $('.order_course').css('display','none');
                }else{
      if (value.length == 0) document.getElementById("courrses").innerHTML = "<option></option>";
      else {
        var citiesOptions = "";
        for (cityId in coursesByName[value]) {
          citiesOptions += "<option value=" + coursesByName[value][cityId] + ">" + coursesByName[value][cityId] +
            "</option>";
        }
        document.getElementById("courrses").innerHTML = citiesOptions;
      }
    }
    }

    function displaySelected() {
      var country = document.getElementById("courrseName").value;
      var city = document.getElementById("courrses").value;
      alert(country + "\n" + city);
    }

    function resetSelection() {
      document.getElementById("courrseName").selectedIndex = 0;
      document.getElementById("courrses").selectedIndex = 0;
    }

