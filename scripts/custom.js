$(document).ready(function(){

  $("#homePage-overlay-bar").hide();
  $("#hamburger-overlay").hide();
  $(".form-overlay").hide();
  $(".dropdown-toggle").dropdown();

/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    // fadeThisOut($("#homePage-Elements"));
    fadeThisIn($("#hamburger-overlay"));
  });

  $("#hamburger-overlay").on("click", function(){
    fadeThisOut($("#hamburger-overlay"));
  });
 // homePage-overlay
  $("#homePage-overlay > .glyphicon-chevron-down , #homePage-overlay > #addEvent").on("click", function(){
    fadeThisOut($("#transparent-overlay"));
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($("#homePage-overlay-bar"));
  });

  $("#transparent-overlay").on("click", function(){
    fadeThisOut($("#transparent-overlay"));
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($("#homePage-overlay-bar"));
  });

  // homePage-overlay-bar
   $("#homePage-overlay-bar").on("click", function(){
    fadeThisOut($("#homePage-overlay-bar"));
    fadeThisIn($("#homePage-overlay"));
  });

/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    fadeThisOut($("#form-start-overlay"));
    fadeThisIn($("#form-thankYou"));
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   fadeThisIn($("#form-guidance"));
   fadeThisOut($("#form-start-overlay"))
  });

/* FORM-GUIDANCE BUTTON */
  $("#gotIt").on("click", function(){
    fadeThisOut($("#form-guidance"));
    fadeThisIn($("#form-userInfo"));
  });

/* USER INFO GLYPHICON CONTROL BUTTONS ***************************************************/
  $(".userInfo-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-start-overlay"));
  });

  $(".userInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-ThankYou"));
    formObject.userGender = $("#userGender option:selected").val();
     formObject.userAge = $("#userAge option:selected").val();
     formObject.userComment = $("#user-comment-box").val();
  });  

  $(".userInfo-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($('#user-comments'));
      $("#user-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#user-comments"));
      });
      $("#user-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#user-comments"));
      });
  }); 

  $(".userInfo-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-attackerInfo"));
    formObject.userGender = $("#userGender option:selected").val();
     formObject.userAge = $("#userAge option:selected").val();
     formObject.userComment = $("#user-comment-box").val();
  });

/* ATTACKER INFO GLYPHICONS CONTROL BUTTONS ************************************************************************************** */  
  $(".attackerInfo-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-userInfo"));
  });

  $(".attackerInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-thankYou"));
      formObject.attackerGender = $("#attackerGender option:selected").val();
      formObject.attackedBy = $("#attackedBy option:selected").val();
      formObject.attackerRelationship = $("#attackerRelationship option:selected").val();
      formObject.attackerComment = $("#attacker-comment-box").val();
  }); 

  $(".attackerInfo-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#attacker-comments"));
      $("#attacker-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#attacker-comments"));
      });
       $("#attacker-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#attacker-comments"));
      });
  }); 

  $(".attackerInfo-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-circumstances"));
      formObject.attackerGender = $("#attackerGender option:selected").val();
      formObject.attackedBy = $("#attackedBy option:selected").val();
      formObject.attackerRelationship = $("#attackerRelationship option:selected").val();
      formObject.attackerComment = $("#attacker-comment-box").val();
  });
  /* CIRCUMSTANCES GLYPHICON CONTROL BUTTONS
  ************************************************************************************** */
    $(".circumstances-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-attackerInfo"));
  });

  $(".circumstances-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-thankYou"));
    formObject.date = document.getElementById("dateRange").value;
    formObject.multipleAssaults = $("#multipleAssaults option:selected").val();
    formObject.circumstancesComment = $("#circumstances-comment-box").val();
  }); 

  $(".circumstances-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#circumstances-comments"));
     
      $("#circumstances-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#circumstances-comments"));
      });
       $("#circumstances-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#circumstances-comments"));
      });
  });

  $(".circumstances-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-circumstances-2"));
    formObject.date = document.getElementById("dateRange").value;
    formObject.multipleAssaults = $("#multipleAssaults option:selected").val();
    formObject.circumstancesComment = $("#circumstances-comment-box").val();
  });

/* FORM-CIRCUMSTANCES-2 GLYPHICON BUTTONS ******************************************** */
  $(".circumstances-2-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-circumstances"));
  });

  $(".circumstances-2-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-ThankYou"));
     formObject.schoolCampus = $("#schoolCampus option:selected").val();
     formObject.reported = $("#reported option:selected").val();
  }); 

  $(".circumstances-2-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#circumstances2-comments"));
      $("#circumstances2-comments > .comment-buttons > #comment-exit").on("click", function(){
       fadeThisOut($("#circumstances2-comments"));
      });
      $("#circumstances2-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#circumstances2-comments"));
        formObject.circumstances2Comment = $("#circumstances2-comment-box").val();
      });
   });

  $(".circumstances-2-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-end"));
     formObject.schoolCampus = $("#schoolCampus option:selected").val();
     formObject.reported = $("#reported option:selected").val();
  });

/* FORM END PAGE ********************************************************************* */
  $("#form-end > .btn-group-lg > .end-comment").on("click", function(){
    fadeThisIn($("#last-comment"));
      $("#last-comment > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#last-comment"));
      });
       $("#last-comment > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#last-comment"));
        formObject.lastComment = $("#last-comment-box").val();
      });
   });  

  $("#form-end > .btn-group-lg > .end-restart").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-userInfo"));
  });

  $("#form-end > .btn-group-lg > .end-submit").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-thankYou"));
  });  

  $(".form-end-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-circumstances-2"));
  });

      $("#form-thankYou").on("click", function(){
        fadeThisOut($("#form-thankYou"));
        fadeThisOut($("#homePage-overlay"));
        fadeThisIn($("#homePage-overlay-bar")); 
      });   
}); /* DOCUMENT.READY(FUNCTION() */


