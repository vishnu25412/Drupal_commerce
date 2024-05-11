(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      /*once('change', '.truck-finder-filter-application input:radio[name="field_applications_target_id"]', context).forEach(
        function (element) {
          element.classList.add('processed');
        }
      );*/

      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_vehicle_type_target_id"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_applications_target_id"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_truck_applications_target_id"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id_1"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id"]').prop('checked', false);
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id_1"]').prop('checked', false);
      // $('#view-id-vehicles_finder .container .view-content').show();


      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_vehicle_type_target_id"]').once().change(function (event) {
        $(this).removeClass('active');
        console.log('====================================');
        console.log(event.target.value, typeof (event.target.value));
        console.log('====================================');
        if (event.target.value == '64') {
          $('.bus-finder-filter-application').addClass('active');
          $('.van-finder-filter-application').addClass('d-none');
          // $('.bus-finder-filter-application').addClass('active');
        } else if (event.target.value == '65') {
          $('.van-finder-filter-application').addClass('active');
          $('.bus-finder-filter-application').addClass('d-none');
          // $('.van-finder-filter-application').addClass('active');
        }
      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_applications_target_id"]').once().change(function () {
        $(this).removeClass('active');
        $('.bus-finder-filter-seater').addClass('active');
        $('.van-finder-filter-seater').addClass('d-none');

      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_truck_applications_target_id"]').once().change(function () {
        $(this).removeClass('active');
        $('.van-finder-filter-seater').addClass('active');
        $('.bus-finder-filter-seater').addClass('d-none');

      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id"]').once().change(function () {
        $(this).removeClass('active');
        $('.bus-finder-filter-fuel').addClass('active');
        $('.van-finder-filter-fuel').addClass('d-none');

      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id_1"]').once().change(function () {
        $(this).removeClass('active');
        $('.bus-finder-filter-fuel').addClass('d-none');
        $('.van-finder-filter-fuel').addClass('active');
      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id"]').once().change(function () {
        $('#views-exposed-form-vehicles-finder-block-1 input.form-submit[value="Apply"]').click();
      });
      $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id_1"]').once().change(function () {
        $('#views-exposed-form-vehicles-finder-block-1 input.form-submit[value="Apply"]').click();
      });

      $('#views-exposed-form-vehicles-finder-block-1 input.form-submit[value="Reset"]').click(function (e) {
        e.preventDefault();
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_vehicle_type_target_id"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_applications_target_id"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_truck_applications_target_id"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_seater_target_id_1"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id"]').prop('checked', false);
        $('#views-exposed-form-vehicles-finder-block-1 fieldset input:radio[name="field_fuel_target_id_1"]').prop('checked', false);

        $('#views-exposed-form-vehicles-finder-block-1 input.form-submit[value="Apply"]').click();
      });

      $('.views-field-field-sticky-menu-links a').click(function () {
        let blockId = $(this).attr('href');
        $('#block-productoverviewblocksgroup').addClass('hidden');
        $('#block-views-block-product-cabin-feature-block-1').addClass('hidden');
        $('#block-views-block-product-aggregates-block-1').addClass('hidden');
        $('#block-productspecifications').addClass('hidden');
        $('#block-views-block-testimonials-block-2-2').addClass('hidden');
        $('#block-views-block-view-faqs-block-3').addClass('hidden');
        $(blockId).removeClass('hidden');

      });


      $('.block-views-blockcategory-comfort-section-one-block-4 ul.pager li.pager__item').click(function () {
        alert(1);
      });

      /*$('.block-views-blockproduct-cabin-feature-block-1 .js-pager__items a.button').once().click(function(){
        $('#views-bootstrap-product-cabin-feature-block-1 .accordion-item div.accordion-collapse').removeClass('show');
      });*/
      //60<U

      var element = jQuery('#view-id-bus_header, .trucks-sticky-menu');
      var elementPosition = element.offset();

      jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > (elementPosition ? elementPosition.top : 0)) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
      // One Page Navigation Setup


      // Footer Tab Click Active
      jQuery(document).ready(function () {
        jQuery('.mobile-footer-sticky-menu .link-group').click(function () {
          if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
          } else {
            jQuery(this).addClass("active").siblings().removeClass("active");
          }
        });
      });
      // Footer Tab Click Active End

      //60<U 3

      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tab09_nav",
          scrub: true,
          pin: true,
          start: "-180px",
          end: '85%',
        }
      });


      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tab09-data",
          scrub: true,
          pin: true,
          start: "-190px",
          end: '85%',

        }
      });

      const activeA = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerA",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeA" }
        }
      });
      activeA.to(".contdata_round", { rotate: "60deg", })

      const activeB = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerB",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeB" }
        }
      });
      activeB.to(".contdata_round", { rotate: "115deg", })

      const activeC = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerC",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeC" }
        }
      });
      activeC.to(".contdata_round", { rotate: "175deg", })

      const activeD = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerD",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeD" }
        }
      });
      activeD.to(".contdata_round", { rotate: "235deg", })


      const activeE = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerE",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeE" }
        }
      });
      activeE.to(".contdata_round", { rotate: "290deg", })

      const activeF = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#layerF",
          toggleActions: "play none none none",
          start: "top 30%",
          end: "+=100%",
          scrub: true,
          toggleClass: { targets: ".tab09_min", className: "activeF" }
        }
      });

      // Round ENd

      //Dropdown brands
      $(".view-models-drop").click(function () {
        $(".view-id-brand_drop .view-content").toggleClass("show-drop");
      });

    }

  };
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})(jQuery, Drupal, once);


// Footer ENQ Fixed Button


// take url parameter from search start 
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// take url parameter from search end 


jQuery(document).ready(function () {
  // For the 'enquire-footer-slide-button' button
    jQuery('.enquire-footer-slide-button').click(function () {
    jQuery(this).toggleClass("click");
    jQuery('.footer-enquire-now-form-popup').toggleClass("show");
    jQuery('.enquire-footer-slide-button').toggleClass("active");

    // Check if the form is open and change the text accordingly
    if (jQuery('.footer-enquire-now-form-popup').hasClass("show")) {
      jQuery(".enquire-button-footer .enquire-button").text("X close");
    } else {
      jQuery(".enquire-button-footer .enquire-button").text("Enquire Now");
    }
  });

// search page query url  start 
  var parameter = getUrlParameter('search_api_fulltext');
  jQuery("#allResults").attr("href",'/site-search?search_api_fulltext='+parameter );
  jQuery("#busResults").attr("href",'/site-search/bus?search_api_fulltext='+parameter );
  jQuery("#vansResults").attr("href",'/site-search/vans?search_api_fulltext='+parameter );
  jQuery("#newsResults").attr("href",'/site-search/news?search_api_fulltext='+parameter );
// search page query url  start

  // For the 'test-btn' button
  jQuery('.test-btn').click(function () {
    jQuery(this).toggleClass("click");
    // Add code here specific to the 'test-btn' button
    jQuery('.footer-enquire-now-form-popup').toggleClass("show");
    jQuery('.enquire-footer-slide-button').toggleClass("active");

    // Check if the form is open and change the text accordingly
    if (jQuery('.footer-enquire-now-form-popup').hasClass("show")) {
      jQuery(".enquire-button-footer .enquire-button").text("X close");
    } else {
      jQuery(".enquire-button-footer .enquire-button").text("Enquire Now");
    }
  });
  


  // Footer ENQ Fixed Button

  // Product page sticky header active class

  jQuery('.views-field-field-sticky-menu-links a').click(function () {
    // Remove "active" class from all menu items
    jQuery('.views-field-field-sticky-menu-links a').removeClass('active');
    // Add "active" class to the clicked menu item
    jQuery(this).addClass('active');
  });
});

// EMI Calculator ###############################################################
(function (jQuery) {
  let chart = null;
  let defaultChart = null;
  Drupal.behaviors.emiCalculator = {
    attach: function (context, settings) {
      // Ensure the code runs only once.
      if (context === document) {
        // DOM is ready, so you can initialize your JavaScript here.
        // Add your JavaScript logic for the EMI calculator here.

        // Function to update range input labels.
        function updateRangeLabel(inputId, labelId) {
          var input = document.getElementById(inputId);
          var label = document.getElementById(labelId);
          var value = parseFloat(input.value);

          if (inputId === 'principal') {
            // Format the loan amount with ₹ symbol and thousands separator.
            label.textContent = value.toLocaleString('en-IN');
          } else if (inputId === 'interest-rate') {
            // Format the interest rate with % symbol.
            label.textContent = value.toFixed(2) + '%';
          } else if (inputId === 'tenure') {
            // Display tenure in months.
            label.textContent = value + ' Months';
          }
        }

        // Attach input change events to update range input labels in real-time.
        jQuery('#principal, #interest-rate, #tenure').on('input', function () {
          var inputId = jQuery(this).attr('id');
          var labelId = inputId + '-label';
          updateRangeLabel(inputId, labelId);
        });

        // Function to calculate and display EMI result.
        function updateEMIResult() {
          // Get input values for principal, interest rate, and tenure.
          var principal = parseFloat(jQuery('#principal').val() || 0);
          var interestRate = parseFloat(jQuery('#interest-rate').val() || 0);
          var tenure = parseFloat(jQuery('#tenure').val() || 0);

          // Check if any of the input values are 0; if so, set EMI to 0.00.
          if (principal === 0 || interestRate === 0 || tenure === 0) {
            jQuery('#emi-result').html('EMI: ₹0.00');
            jQuery('#emi-results').html('EMI: ₹0.00');
            jQuery('#principal-amount').html('Principal Amount: ₹0.00');
            jQuery('#total-interest').html('Total Interest: ₹0.00');
            jQuery('#total-amount').html('Total Amount: ₹0.00');
          } else {
            // Calculate EMI based on the formula you prefer.
            var result = calculateEMI(principal, interestRate, tenure);

            var emi = result.emi;
            var totalInterest = result.totalInterest;
            var totalAmount = result.totalAmount;

            // Ensure emi is a number before calling toFixed().
            if (isNaN(emi)) {
              jQuery('#emi-result').html('EMI: ₹0.00');
              jQuery('#emi-results').html('EMI: ₹0.00');
              jQuery('#principal-amount').html('Principal Amount: ₹0.00');
              jQuery('#total-interest').html('Total Interest: ₹0.00');
              jQuery('#total-amount').html('Total Amount: ₹0.00');
            } else {
              // Format the result with ₹ symbol, thousands separators, and two decimal places (0.00) and display it.
              jQuery('#emi-result').html('Monthly EMI: ₹' + emi.toFixed(2));
              jQuery('#emi-results').html('EMI : ₹' + emi.toFixed(2));
              jQuery('#principal-amount').html('Principal Amount: ₹' + principal.toLocaleString('en-IN'));
              jQuery('#total-interest').html('Total Interest: ₹' + totalInterest.toLocaleString('en-IN'));
              jQuery('#total-amount').html('Total Amount: ₹' + totalAmount.toLocaleString('en-IN'));

               // Update the pie chart
              updateChart(emi, principal - totalInterest);
            }
          }
        }

        // Set initial values for range inputs and labels
        jQuery('#principal, #interest-rate, #tenure').val(0);
        updateRangeLabel('principal', 'principal-label');
        updateRangeLabel('interest-rate', 'interest-rate-label');
        updateRangeLabel('tenure', 'tenure-label');

        // Attach a click event to the "Reset" button.
        jQuery('#reset').on('click', function () {
          // Reset range inputs to their initial values (zero).
          jQuery('#principal, #interest-rate, #tenure').val(0);

          // Update range input labels for initial values.
          updateRangeLabel('principal', 'principal-label');
          updateRangeLabel('interest-rate', 'interest-rate-label');
          updateRangeLabel('tenure', 'tenure-label');

          // Clear the EMI result and other values.
          jQuery('#emi-result').html('EMI: ₹0.00');
          jQuery('#emi-results').html('EMI: ₹0.00');
          jQuery('#principal-amount').html('Principal Amount: ₹0.00');
          jQuery('#total-interest').html('Total Interest: ₹0.00');
          jQuery('#total-amount').html('Total Amount: ₹0.00');

          // Clear the pie chart
          updateChart(0, 0);
        });

        // Attach a click event to the "Calculate EMI" button.
        jQuery('#calculate-emi').on('click', function () {
          updateEMIResult(); // Calculate and display EMI result on button click.
        });

        // Function to calculate EMI and other values.
        function calculateEMI(principal, interestRate, tenure) {
          var monthlyInterest = interestRate / 1200;
          var emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
            (Math.pow(1 + monthlyInterest, tenure) - 1);

          var totalInterest = emi * tenure - principal;
          var totalAmount = principal + totalInterest;

          return { emi, totalInterest, totalAmount };
        }
        function updateChart(emi, loanAmount) {
          if (chart) {
            chart.data.datasets[0].data = [emi, loanAmount - emi];
            chart.update();
            
          } else {
            chart = createPieChart(emi, loanAmount - emi);
          }
        }

        function createPieChart(emi, remainingLoanAmount) {
          const ctx = document.getElementById('myChart').getContext('2d');

          return new Chart(ctx, {
            type: 'doughnut',
            data: {
              // labels: ['EMI', 'Remaining Loan Amount'],
              datasets: [{
                data: [emi, remainingLoanAmount],
                backgroundColor: ['#307fe2' , '#0a0a5f'],
                borderWidth: 2
              }]
            }
          });
        }
      }
    },
  };
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
  // Find all video elements rendered by the Media Type module
  var videos = document.querySelectorAll('video');

  // Loop through each video element and add the playsinline attribute
  videos.forEach(function(video) {
    video.setAttribute('playsinline', '');
  });
});

