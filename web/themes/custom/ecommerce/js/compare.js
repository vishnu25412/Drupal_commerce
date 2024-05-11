/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app/compare.js":
/*!*************************************!*\
  !*** ./resources/js/app/compare.js ***!
  \*************************************/
/*! no static exports found */
// window.AU = require("../resources/js/lib/app_utils")
/***/ (function(module, exports) {

var CV = CV || {};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the Compare button
  var compareButton = document.querySelector(".tb-btn-primary");

  // Add click event listener to the Compare button
  compareButton.addEventListener("click", function(event) {

      event.preventDefault();

      var selectedApplication = document.getElementById("sel_terms").value;

      var selectedBrand = document.querySelector(".compare--product--1 .selected_terms").value;

      var selectedProduct = document.querySelector(".compare--product--1 .selected_nodes").value;

      var selectedBrand2 = document.querySelector(".compare--product--2 .selected_terms").value;

      var selectedProduct2 = document.querySelector(".compare--product--2 .selected_nodes").value;


      if (selectedApplication === "" || selectedBrand === "" || selectedProduct === "") {
          alert("Please select an application, brand, and product before comparing.");
      } else if (selectedBrand === "" || selectedProduct === "" && selectedBrand2 === "" || selectedProduct2 === "") {
         
          alert("Please select atleast two product for compare");
      }
      
      else {
          window.location.href = "/compare";
      }
  });
});



CV = {  

  
  init: function init() {
    //get brand based on application name
    jQuery(".selected_application").on("change", function (e) {
      CV.getBrand(jQuery(this));

    }); //set selected products for compare
   
    jQuery(".selected_terms").on("change", function (e) {
      CV.getProductNodes(jQuery(this));
    }); //set selected products for compare


    // Event for select Brand
    jQuery(".selected_terms").on("click", function () {
      // Check if application is selected
      var selectedApplication = jQuery(".selected_application").find("option:selected").val();
      if (!selectedApplication || !jQuery.isNumeric(selectedApplication)) {
        alert("Please select an application before choosing a brand.");
      }
    });
    // Event for select Product
    jQuery(".selected_nodes").on("click", function () {
      // Check if application is selected
      var selectedBrand = jQuery(".selected_terms").find("option:selected").val();
      if (!selectedBrand || !jQuery.isNumeric(selectedBrand)) {
        alert("Please select an Application and Brand before choosing a Product.");
      }
    });

    jQuery(".selected_nodes").on("change", function (e) {
      CV.compareItems(jQuery(this));
    }); //compare checkbox in applictaion page

    jQuery(".compare_chkbox ").change(function (e) {
      // var product_ids = AU.getCookie("cp_prodids") ? JSON.parse(AU.getCookie("cp_prodids")) : [];
      // var cat_ids = AU.getCookie("cp_catids") ? JSON.parse(AU.getCookie("cp_catids")) : []; // jQuery(".compare_lists").slick("refresh");
      var product_ids = JSON.parse(getCookie("cp_prodids") || '[]');
      var cat_ids = JSON.parse(getCookie("cp_catids") || '[]');
      

      if (product_ids.length > 2 && jQuery(this).is(":checked")) {
        alert("Only 3 products are allowed for compare");
        jQuery(this).prop("checked", false);
        return false;
      }

    }); //clear all for compare items


    jQuery(".compare_close").on("click", function (e) {
      CV.removeCompareItems(jQuery(this));
    });
   
  },
  setCompareItems: function setCompareItems() {
    //trigger on change on page load
    // var compare_products = AU.getCookie("cp_prodids");
    // var compare_cat = AU.getCookie("cp_catids");
    var compare_products = JSON.parse(getCookie("cp_prodids") || '[]');
    var compare_cat = JSON.parse(getCookie("cp_catids") || '[]');
    var compare_appl = JSON.parse(getCookie("cp_application") || '[]');

    // console.log("compare_products.....", compare_products);
 

    if (compare_products != "" && compare_cat != "" && compare_appl != "") {
      // var arr_prods = JSON.parse(compare_products);
      // var arr_cats = JSON.parse(compare_cat);
      // var arr_application = JSON.parse(compare_appl);
      
      // console.log("compare_products  .....", compare_products);
      // if (arr_application && arr_cats && arr_prods) {
        

        jQuery(".selected_application").each(function (index) {
          if (compare_appl[index]) {
            jQuery(this).val(compare_appl[index]).trigger("change");
          }
        });

        jQuery(".selected_terms").each(function (index) {
          if (compare_cat[index]) {
            jQuery(this).val(compare_cat[index]).trigger("change");
          }
        });

        jQuery(".selected_nodes").each(function (index) {
            if (compare_products[index]) {
              jQuery(this).val(compare_products[index]).trigger("change");
            }
   
        });

       
      // }
    }
  },
  compareItems: function compareItems(e) {
    var select_node = e.val();
    var arr_data = JSON.parse(product_items);
    var arr_brand = JSON.parse(brand_items);
    var selected_cat = e.prev().closest("select").find(":selected").val();

    if (arr_brand[selected_cat] !== undefined && arr_brand[selected_cat][select_node] !== undefined) {
      e.prev().prev().prev().find(".tax_image").attr("src", arr_brand[selected_cat][select_node].img);
    } else {
      e.prev().prev().find(".tax_image").attr("src", "/themes/busb5/images/compare/compare.jpg");
    }

    var data_product = [];
    var data_category = [];
    var data_applications = [];
    
    // var selected_product_value = [];
    // var selected_appl_value = [];
    // var selected_brand_value = [];


    jQuery(".selected_nodes").each(function () {
      var selected_node = jQuery(this).find("option:selected").val();
      if (jQuery.isNumeric(selected_node)) {
        data_product.push(jQuery(this).find("option:selected").val());
        // selected_product_value.push(jQuery(this).find("option:selected").text());
      }

    });
    
    jQuery(".selected_terms").each(function () {
      var selected_categories = jQuery(this).find("option:selected").val();

      if (jQuery.isNumeric(selected_categories)) {
        data_category.push(jQuery(this).find("option:selected").val());
        // selected_brand_value.push(jQuery(this).find("option:selected").text());
      }
    });

    jQuery(".selected_application").each(function () {
      var selected_application = jQuery(this).find("option:selected").val();

      if (jQuery.isNumeric(selected_application)) {
        data_applications.push(jQuery(this).find("option:selected").val());
        // selected_appl_value.push(jQuery(this).find("option:selected").text());
      }
    });


   
    setCookie("cp_prodids", JSON.stringify(data_product), 7); // Set cookie for 7 days
    setCookie("cp_catids", JSON.stringify(data_category), 7);
    setCookie("cp_application", JSON.stringify(data_applications), 7);
  },

  // getBrand: function getBrand(e) {
  //   var selected_val = e.val();
  //   var this_ele = e;
  //   // if (!CV.selectedValues) {
  //     // CV.selectedValues = [];
  // // }
  // // CV.selectedValues.push(selected_val); // Store selected_val in the array
  // CV.selectedValues = selected_val
  //   console.log("==========0000",product_items);
  //   var arr_data = JSON.parse(product_items);
  //   this_ele.next(".selected_terms").empty();
  //   var option = jQuery("<option></option>");
  //   option.val("");
  //   option.text(Drupal.t("Select Brand"));
  //   this_ele.next(".selected_terms").append(option);

  //   var uniqueBrandIds = [];
  //   if (arr_data[selected_val] !== undefined) {
  //     jQuery.each(arr_data[selected_val], function (key, value) {
  //       if (uniqueBrandIds.indexOf(value.brand_id) === -1) {
  //         uniqueBrandIds.push(value.brand_id);
  //         var option = jQuery("<option></option>");
  //         option.val(value.brand_id);
  //         option.text(value.brand_name);
  //         this_ele.next(".selected_terms").append(option);
  //       }
  //     });
  //   }
  // },

  getBrand: function getBrand(e) {
    var selected_val = e.val();
    var this_ele = e;
    CV.selectedValues = selected_val;
  
    console.log("product_items00000", product_items);
    var arr_data = JSON.parse(product_items);
  
    // Loop through all brand select elements
    jQuery(".selected_terms").each(function () {
      var currentSelect = jQuery(this);
      currentSelect.empty();
  
      var option = jQuery("<option></option>");
      option.val("");
      option.text(Drupal.t("Select Brand"));
      currentSelect.append(option);
  
      var uniqueBrandIds = [];
      if (arr_data[selected_val] !== undefined) {
        jQuery.each(arr_data[selected_val], function (key, value) {
          if (uniqueBrandIds.indexOf(value.brand_id) === -1) {
            uniqueBrandIds.push(value.brand_id);
            var option = jQuery("<option></option>");
            option.val(value.brand_id);
            option.text(value.brand_name);
            currentSelect.append(option);
          }
        });
      }
    });
  },

  getProductNodes: function getProductNodes(e) {
    var selected_val = e.val();
    var this_element = e;
    var arr_data = JSON.parse(product_items);
    var arr_brand = JSON.parse(brand_items);
    var arr_category = JSON.parse(category_items);
    this_element.next(".selected_nodes").empty();
    var option = jQuery("<option></option>");
    option.val("");
    option.text(Drupal.t("Select Product"));
    this_element.next(".selected_nodes").append(option);
    CV.selectedproduct = arr_brand[selected_val]
    if (arr_brand[selected_val] !== undefined) {
      if (arr_data[selected_val] !== undefined && arr_data[selected_val].img) {
        this_element.prev().find('.tax_image').attr("src", arr_data[selected_val].img);
      }
      jQuery.each(arr_brand[selected_val], function (key, value) {

        // if (CV.selectedValues.indexOf(value.application_id) !== -1){
          if(value.application_id == CV.selectedValues){
          var option = jQuery("<option></option>");
          option.val(value.id);
          option.text(value.name);
          this_element.next(".selected_nodes").append(option);
        }
      });

    }
  },
  

// Function to toggle select to label
toggleSelectToLabel: function toggleSelectToLabel(selectElement) {
  var selectedOption = selectElement.options[selectElement.selectedIndex].text;
  var labelElement = document.createElement('label');
  labelElement.innerText = selectedOption;
  selectElement.replaceWith(labelElement);
},

// Function to toggle all select elements in a product container
toggleProductContainerToLabel: function toggleProductContainerToLabel(productContainer) {
  var selectElements = productContainer.querySelectorAll('.selected_application, .selected_terms, .selected_nodes');
  selectElements.forEach(function (selectElement) {
      CV.toggleSelectToLabel(selectElement);
  });
},

getProductUrl: function getProductUrl(e) {
  var selected_val = e.val();

  var selected_pd = JSON.parse(getCookie("selected_pd_val")) || [];
  var sel_product_url = JSON.parse(getCookie("selected_pd_url")) || [];

  if (CV.selectedproduct && CV.selectedproduct.hasOwnProperty(selected_val)) {
    var selectedProduct = CV.selectedproduct[selected_val];

    // Check if the product is already selected
    var selectedIndex = selected_pd.indexOf(selected_val);

    if (selectedIndex === -1) {
      // Product is not already selected, add it to the arrays
      selected_pd.push(selected_val);
      sel_product_url.push(selectedProduct.url);

      setCookie("selected_pd_val", JSON.stringify(selected_pd), 7);
      setCookie("selected_pd_url", JSON.stringify(sel_product_url), 7);

      var compareProductContainer = e.closest('.compare--product');

      if (compareProductContainer.length) {
        // Create "View Details" link
        var viewDetailsLink = document.createElement("a");
        viewDetailsLink.innerHTML = "View Details";
        viewDetailsLink.className = "view-details-link";
        viewDetailsLink.href = selectedProduct.url;
        viewDetailsLink.target = "_blank";

        // Append the "View Details" link to the container
        compareProductContainer.append(viewDetailsLink);

        // Create "Cancel" button
        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";
        cancelButton.className = "cancel-button";

        // Append the "Cancel" button to the container
        compareProductContainer.append(cancelButton);
      } else {
        console.log("Parent container not found for selected product");
      }
    } else {
      console.log("Product already selected");
    }
  } else {
    console.log("Selected value not found in CV.selectedproduct");
  }

},


  removeCompareItems: function removeCompareItems(this_ele) {
    var prod_id = this_ele.attr("data-prodid");
    var cat_id = this_ele.attr("data-catid");
    var app_id = this_ele.attr("data-appid");
    var compare_products = JSON.parse(getCookie("cp_prodids"));
    var compare_cat = JSON.parse(getCookie("cp_catids"));
    var compare_application = JSON.parse(getCookie("cp_application"));

    console.log("prod length: " + compare_products.length);
    if (prod_id) {
      compare_products.splice(jQuery.inArray(prod_id, compare_products), 1);
      setCookie("cp_prodids", JSON.stringify(compare_products)); //AU.setCookie('cp_catids', JSON.stringify(data_category));
    }

    if (cat_id) {
      compare_cat.splice(jQuery.inArray(cat_id, compare_cat), 1);
      setCookie("cp_catids", JSON.stringify(compare_cat));
    }

    if (app_id) {
      compare_application.splice(jQuery.inArray(app_id, compare_application), 1);
      setCookie("cp_application", JSON.stringify(compare_application));
    }
    // location.reload();
    if (compare_products.length < 1) {
      window.location.href = "/compare-vehicle";
    } else {
      location.reload();
    }
  },
  triggerCompareBlock: function triggerCompareBlock(node_id) {
    var prod_data = productdata_list;
    var compare_products = getCookie("cp_prodids");

    if (compare_products != "" && JSON.parse(compare_products).length > 0) {
      jQuery(".prodimg").attr("src", "/themes/busb5/images/icons/plus.png");
      jQuery(".prodtitle").html("");
      jQuery(".prodprice").html("");
      jQuery(".proclose").attr("data-id", "");
      jQuery(".proclose").attr("data-cat-id", "");
      jQuery(".productlist__pricedetails").addClass("hide");
      jQuery.each(JSON.parse(compare_products), function (index, prod_id) {
        if (prod_data[prod_id]) {
          jQuery(".preClose_" + index).attr("data-id", prod_id);
          jQuery(".preClose_" + index).attr("data-cat-id", prod_data[prod_id].cat_id);
          jQuery(".prod_img_" + index).attr("src", prod_data[prod_id].img).removeClass("bigplus-icon");
          jQuery(".prod_title_" + index).html(prod_data[prod_id].title);
          jQuery(".price_details_" + index).removeClass("hide");

          if (prod_data[prod_id].price) {
            jQuery(".prod_price_" + index).html("₹" + prod_data[prod_id].price);
          } else {
            jQuery(".prod_price_" + index).html("");
          }
        }
      });
      jQuery(".compareBlk").removeClass("hide");
    } else {
      jQuery(".prodimg").attr("src", "/themes/busb5/images/icons/plus.png").addClass("bigplus-icon");
      jQuery(".prodtitle").html("");
      jQuery(".prodprice").html("");
      jQuery(".proclose").attr("data-id", "");
      jQuery(".proclose").attr("data-cat-id", "");
      jQuery(".productlist__pricedetails").addClass("hide");
    }
  }
};





(function ($, Drupal) {
  CV.init();
})(jQuery, Drupal);

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./resources/js/app/compare.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/docroot/themes/scv/resources/js/app/compare.js */"./resources/js/app/compare.js");


/***/ })

/******/ });

// Accordian

